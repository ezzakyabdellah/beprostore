import authRouter from "@/routes/auth";
import indexRouter from "@/routes/index";
import tweetRouter from "@/routes/tweet";
import ebayRouter from "@/routes/ebay";

export default function (app) {
  // app.use("/", indexRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/tweets", tweetRouter);
  app.use("/api/ebay", ebayRouter);
}
