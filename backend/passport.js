const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "216641462687-o228gdks8ucroh05mi1m76nrot0ivm80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

INSTAGRAM_CLIENT_ID = "a69652bf64c40bb276d7";
INSTAGRAM_CLIENT_SECRET = "eccb66be0e1bfc2940efd14ce867cb767a1ed7cb";

FACEBOOK_APP_ID = "1078529809977329";
FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(new InstagramStrategy({
  clientID: INSTAGRAM_CLIENT_ID,
  clientSecret: INSTAGRAM_CLIENT_SECRET,
  callbackURL: "/auth/instagram/callback"
},
  function (accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
