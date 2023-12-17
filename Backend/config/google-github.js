import passport from 'passport';
import {Strategy as GithubStratgey} from 'passport-github2';
import crypto from 'crypto';
import User from '../model/Student.js';

passport.use(new GithubStratgey({
    clientID: '90f197eb90f33e494494',
    clientSecret: 'fc15d2456786087d3697caacab380abb15eca2be',
    callbackURL: 'http://localhost:8000/user/auth/github/callback',
    scope: ['user:email'],

},
function (accessToken, refreshToken, profile, done) {
    User.findOne({ email: profile.emails[0].value }).then(user => {       
        if (user) {
            return done(null, user);
        } else {
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex'),
                image: profile.photos[0].value
                
            }).then(user => {
                return done(null, user);
            }).catch(err => {
                console.log("There is problem with Creation User", err);
                return;
            })
        }
    }).catch(err => {
        console.log("there is problem with finding user in google oauth", err);
        return;
    })
}
))

passport.serializeUser((user, done) => {
    // Here, 'user.id' could be replaced by the unique identifier for your user model
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Find the user by the provided id (retrieved from the session) and return it
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

export default passport;
