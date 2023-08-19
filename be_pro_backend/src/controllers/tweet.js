import createError from 'http-errors';

import db from '@/database';

/**
 * POST /tweets
 * Create tweet request
 */
export const createTweet = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    // Create tweet
    const tweetData = { ...req.body, userId };
    const tweet = await db.models.tweet
      .create(tweetData, {
        fields: ['userId', 'tweet'],
      });

    return res.status(201).json(tweet);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /tweets
 * List tweets with pagination
 */
export const getTweets = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const offset = page * perPage - perPage;

    const tweetListResponse = await db.models.tweet
      .findAndCountAll({
        offset,
        limit: perPage,
        include: {
          model: db.models.user,
          attributes: ['id', 'firstName', 'lastName'],
        },
        order: [['createdAt', 'DESC']],
      });

    const totalPage = Math.ceil(tweetListResponse.count / perPage);
    const response = {
      ...tweetListResponse, page, totalPage, perPage,
    };
    return res.json(response);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /tweets/:id
 * Get tweet by id
 */
export const getTweetById = async (req, res, next) => {
  try {
    const { id: tweetId } = req.params;

    const tweet = await db.models.tweet
      .findOne({
        where: { id: tweetId },
        include: {
          model: db.models.user,
          attributes: ['id', 'firstName', 'lastName'],
        },
      });
    if (!tweet) {
      return next(createError(404, 'There is no tweet with this id!'));
    }

    return res.status(200).json(tweet);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /tweets/:id
 * Delete tweet request
 */
export const deleteTweet = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id: tweetId } = req.params;

    const tweet = await db.models.tweet.findOne({ where: { id: tweetId, userId } });
    if (!tweet) {
      return next(createError(404, 'There is no tweet with this id!'));
    }


    await tweet.destroy();
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};
