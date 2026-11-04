# LinkedIn: native-cross-platform-or-web-app

## Post 1: native text

For a first version, we build a web app by default. If you do need one in the app store, build it once for both iPhone and Android.

A tenant reporting a repair needs a form, a photo upload and a status page. A browser handles that with no store review, and nobody installs an app for something they do now and then.

An installed app earns its place when:

• The camera or location is central and used every day.
• People work without a signal and need changes to sync later.
• Notifications are part of how the product works, like a reminder to take a dose.
• Customers expect to find you in the App Store or Google Play.

Notifications are the catch for web apps. Since iOS 16.4 they can send them on iPhone, but only after someone adds the site to their home screen, and most people don't.

Once you need an app, most of it is business rules, data and talking to the server, which work the same on both platforms. One team can build that once. When one feature really needs native code, we usually build that piece natively and share the rest.

A website in a thin app wrapper tends to fail Apple's review. If you need the listing, build a real app.

We wrote up how we'd make that call, and where each option breaks down. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/native-cross-platform-or-web-app.pdf)

Document title: Five questions before you build a mobile app

Answer these before anyone picks a framework, and you'll know whether you need a web app, a cross-platform app or native code. The last slide shows how to read your answers.

## First comment (both posts)

https://motowntech.com/go/native-cross-platform-or-web-app
