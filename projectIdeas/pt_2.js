/**
 @PROCESS-> ----Of Making App start from now Onwords----

in this one we'r using parsel,
So what is parsel🤔??

it is something know as "Package" By the term Package it's mean what ? it is kind of a modeule or a package of Javascript files some peace of code. for that we need to use @package manager.
-npm(Officially Npm Does not stand for "Node package manager" but it is basically doing the same thing)

🤔 Do you know what BUNDLERS React use in general originally which create-react-app?[🔺vite,🔺webpack,🔺parsel,🔺Babel] 
->🎗️ it is responsible for perform lot more operations.
->🎗️ They use "webpack" Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify and !Babel it's an compiler(Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React)

->🎗️In the originally create react app BUNDLERS they use is know as ""webpack"" & Babel as well.

Ref:-> 🔗✈️https://create-react-app.dev/
-@working
 on create-react-app(use "webpack" BUNDLERS)
-@TERMINAL_process
-npm init + enter

 👋🤔So what does that mean when you've package-manager? what is package.json? what is Npm🤔? & 🤔why npm?

 -😶‍🌫️it's an amazing npm configuration which npm needs. 
 -😶‍🌫️coming to "npm"->it is use to manage our packages
 -😶‍🌫️coming to "why npm"-> -⤵️

 a)-🎗️becz our entire application base on packages so we need package in order to run. 
 b)-🎗️it does not run on just react-only it has lot of superpowers which we need & those superpowers comes from defferent packages which packages are present by using npm. it is like maven for "UI" 
 c)-🎗️in addition to our react app cannot be build by just injecting into our web it has packages which provide more powers via npm.

 @🫣CONCLUSION_ON_WHY_NPM ->  Interview Perspective give ans belew one;
 a)🎗️we want to manages lot of packages our react is huge app with just does not run on react there are lot more superpowers,lot more functionality which we need & those superpowers comes from deff'nt packages which packages are present by using NPM. 

 b)🎗️react it's powered by lot of thing,packages let just say we need to minify up,neet to BUNDLES things, need to varify, need to do tree shaking, remove console log,we need to do chunking  let's suppose optimize our apps so for that we need lot more "helper packages" & those helpers packages comes inside "npm".
 Now we got package-json;


-------------)NEW)------------

@👋HEADING@🛋️ :---> Basic Overview on Package-Lock-Json, Parsel js & some Versioning Stuff.

Now,we'have Everything mean Package-json & All let just Ignites Our Apps.

HOW_WE_DO_THAT? via belew one(BUNDLERS)

Ref: -> https://parceljs.org/

@ADVANTAGE -> Good for teaching it has similar thing left BUNDLERS offer like webpack,..it's beasts for coders multitasker.
So,How do we get Parser 
 - npm i -D parsel
   [🤔🫣Given the fact we don't want parsel on to Production,we want this into our developers machines that's how it is "-D"(DEV-Dependency(means all the packages that are project use)) or --save-dev almost same both @Note:Don't randomly copy & pest we'r gain from scratch]
   @NOTE -> Dev-Enivironment & Global Enivironment two always there

   Now,we got @package-lock-json what is Does?
   It is very important file let me tell you from scratch
   What is belew one pass us from package-json(recently install)

  "devDependencies": {"parsel": "^0.3.0"},

   @ABOUT-🔝 
   ^  ↩️(know as "Caret" instead of this one(^) you can use tilde(~) over there if you want) if doubt see ⤵️
  -it is the way for use to tell which version should we uses major and miner version of parsel.
  [🔺^ , 🔺~, 🔺""]
  "^" ↩️ It mean if the new version came it'll Automatically updated when you use this "^" e.g 0.1.1 to turn into 0.1.2 only happened for minor version.
  "~" ↩️  if you want to upgrade this into major version we will use "~" tilde  instead one ("^")
  ""  ↩️  if you give this without sign mean "0.3.0" I just want this version only not anyone mean i don't want any update that's the concept of all.

  @ref -> 🖇️https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json(clear more you'r doubt)


  !Imp 🎗️🤔So, What is package-lock-json ?❔

  ----Interview Perspective give ans belew one----
  it is a proof what extact version you use if you compare package-json & package-lock-json. it exactly tell what version does you'r depend on. it keeps us a snap-shot of it.
  =>
  So, when i use this "devDependencies": {"parsel": "^0.3.0" }
  if this,let suppose you'r version changes to "^0.3.1" my project is suppose to be have upgrade. 
  -So to know what exact version we use on Production Or do we need for Production we use package-lock-json. it exactly tell you the version of which library you'r using if you go(package-lock-json) and scrooll down you get exact version but 😱Given the fact there is no symboll like ^ ~ "" like that why??⁉️
  
  🤔🫣Have you heard one convection/statments? that it is working on my local but it is not working on Production? everybuddy's facing same issues, why?
   => 
   🎗️for resolving that issues somethimes what happened is we talk about"package-json" let's something happened -> "^ 0.3.0" suppose it update after certanity it'would'nt be show here it rather would be show in "package-lock-json" it will upgrade iteself.
   so, we don't want such uncertanity on our machines or as well into the Production. so we've package-lock-json which "locks" the version 

   🎗️it is a proof what extact version you use if you compare package-json & package-lock-json. it exactly tell what version does you'r depend on. it keeps us a snap-shot of it
   @conslusion:--> so far we'have parsel as devDependencies ("0.3.0") if there is update veresion here. so my package-lock-json lock the version & we keep it safe.

  👋What is the difference between major and minor version?🤔

  MAJOR version increment indicates incompatible(destract one) API changes. MINOR version increment indicates addition of functionality in a backwards-compatible manner. PATCH version increment indicates backwards-compatible bug fixes.

-------------)NEW)------------

  @ABOUT:---> what is packaglockjson,node_modules & create react app.
 

  🙆‍♂️what is packaglockjson?
   -🎗️it is very important file it locks the version
   @🫣🤫KeepNote: Never ever put you'r "packaglockjson" into gitignore.if you put this into gitignore it's 100% chance of error.
   -why it's because you'r machines is just stimulated machines you'r project run on server.
   🧑‍💻client machines  ◀️---- github(server)  ----▶️ 🖥️ server machines
   so,want packaglockjson has to be exact version so this need to send server as well but it won't go dirctly because it needs be pass from git server as well then it shipt to server machines(server will fetch from this git so we need packaglockjson 100% in git) that's what we need to pass exectly. 
   -🎗️it maintains the exact version of it,it keeps on track.
   -🎗️it maintains the hash of it as well 

   -what is this integrity": "sha512-2Hux... in packaglockjson??
    🫵it maintains the hash of it as well. this has ensures that what exactly the version parsel was running on my system is exactly the same on Production or not that's how it maintains the integrity that's is why it is sha512 formate.
    @sha512: Regarding neawer version of node;
    
   🧐what is node_modules😵‍💫 when somebudyy hit npm i <package>?
     -🎗️it is kind of DataBase for you'r all npm packages where all code includes in BUNDLERS forms.
     -🎗️this is form where all superpowers has comes up here.
     -🎗️how you'r parsel minify you'r code go and see on node_modules?
     -🎗️it is helper function.
     -🎗️it always go through PROCESS our project depend on parsel depend on parsel (minifires)BUNDLERS that present inside node_modules
     -🎗️there is browserlist -> what does it do? so this browserlist helps us to make our app compatible older version of browser e.g enternet explore.
     @node-gyp-build: needs to be install "optionally"(solve error);
     @Makesure: it should'nt be on @github 
     😵‍💫Why we don't put it on git?? 
     -🎗️packaglockjson & package-json has sufficient amount of information to recreate node_modules. it keeps on track all the Dependency and Versioning.
     @😗IMP-> packaglockjson helps us to generate node_modules on to our server. one is at 🧑‍💻localmachine & and one is at 🖥️server that's it. we need to create node_modules by own on to a server Ok.   

     Now, what amazing thing parsel can do??
     @NOTE: -> Don't use CDN & write code( Not good way)
     @why:  -> react keeps on updating thing to get rid of that. 
               then need to change CDN link also so that's why
               & usually not found this one our node-modeule so what is easy for us for fetch data form CDN or server, obivious from server. 

    let Us now create first create-reacta-app?
    @FOLLOW_PROCESS↙️
    -🎗️npm i react 
    -🎗️npm install react-dom 
    -🎗️npx parsel index.html(entry-point) it started the ser server with is 
     😵‍💫npx:--> what does that mean? execute code by using npx take ADVANTAGE of node_modules

     @Accendentaly we got 🔺"Error" why because we previously use "CDN" and we removed from it. in order to resolve that error we need to bring info from node_modules for that we need to "import" stuff on to App.js

     So what is ReactDOM?
     this is the package which manipulating the dom;

     @KEEPNOTE:-> Never Ever touch node_modules,packaglockjson file.
     @KEEPNOTE:-> Need to tell browser:-> type ="module"
     O.W throwth error. in index.html because browser or narmal js don't what is import we need tell this is not narmal js file this is module in js.

     #🔺!IMP:-: need to import react & ReactDOM(App.js)

   -------------)NEW)------------

   HMR:-->(HOT-MODULE-RELOADING)

   When it happened 🧐?:-> after save it Automatically load webside & update it. like apply color,apply fontSize..... the process of this functionality is know as HMR.
   Who is doing 🧐? Parsel

   How Does HMR work 🧐?? How does it Do?
   :-> Something know as ""File Watcher algorithm""(copowred by "C++") parcel uses this algorithm to keep a track.


   Q) Does parcel Need some space 🧐?? while doing stuff HMR ? & what is parcel-cache ??

   :-> of course everybuddy want space but parcel don't ask for space but need space. 
   ----------
   :-> whatever operations HMR & FWR & Minification of your file....parcel is doing it for you it uses all this file present on 📂parcel-cache.

   What is dist folder 🧐??
   -🎗️Keep the files minify for us.

   -🎗️So,this is Development Build when we use "npm start", "npm run dev", "npx parcel src/index.html" in terminal so this is just create a "faster Development" version of our project & serve it on server. 

   -🎗️it just create a "Development Build" for us & it hoasted on server.
   -🎗️What if we tell the parsel, make a Production Build "npx parcel build src/index.html" so how do I tell the parcel make s Production build ?🧐? :-> I tell it by using "build" command-
   -& when you say this it create a lot more thing,it will minify you'r file it'will do lot more thing.- 
   -🎗️& where it'll push this build 🧐? parcel will build all the Production files into my 📂"dist" folder.

   -Let'suppose you delete 📂"dist" folder ?

   Now if hit ""npx parcel build src/index.html(Production purpose)"" will it work or not 🧐?? 
   Not it show error! so to git rid of ↙️

   @😗👉KEEP_NOTE:-> After that need to clean entry point "package.json"
   when we use "parcel" no need to specified ep(main: "App.js") becz parcel give already previledges in terminal use this one -> "npx parcel build src/index.html" in the form of command. NOW Hit enter.

   :-> -🎗️ now it absoluterly work it create 3 files for us whatever file present on dist 📂folder know as "helper file(map)" 
   -:->-🎗️Now as we grow ther are lot more file But why it give me 3 files 🧐??
   :-> -🎗️let me tell what is parcel🧐?? it is BUNDLERS it is a bundling the things when we create a Production build it create this 3 files as of now & push it into 📂dist folder.
   :-> -🎗️Now,you'll get 3 file overther & doing the process of minify our project & this is code that you imported.
   :-> -🎗️you'll get at the end of code our little bit Js code while scroll up. @find_key on index.js file
   -So, this is code where react & ReactDOM code imported from this 📂dist folder.







  @😗INTERVIEW__PERSPECTIVE😗@

     WHY React has fast 🧐??
     yaa react is fast in itself but react needs a lot of thing for it too make it fast.
    -🎗️when you'are building a fast web application react it just a small part of it.
    -🎗️becz react uses so many modules,BUNDLERS[e.g:parcel(it uses dependensis)]
    -🎗️it ack as a Catalist
    -🎗️There are so many things that react optimize for us & there are so many things that BUNDLERS gives us a whole application is combinatiion of all those things whatsoever we discuss like HMR,minify,tree shaking,images optimization,compression....see below e.g this term.
    -🎗️ And in those one @-SAYS-@: We've package-manager which handles & takes care of 😍😍transistive dependencies on our Code.
    -🎗️@-SAYS-@: When we build production ready app we need to do lot more thing...e.g HMR,FMR,🔺Bundling..... likevise below one 👇👇tell the Interviewer and we can't do this alone for that we need dependencies when we need dependencies so those dependencies also depend on another know as 😍😍Transitive Dependensis(base on Tree dependencies).
 
   H.W: Ref: ✈️🔗https://parceljs.org/features/development/   (to more cler your doubt)


  -@👉😗WHAT_PARCEL_DOES_IT_FOR_US:↙️ H.W
      --[🔺Create a server for you, It enables🔺HMR(Hot model Replacement),🔺FWR,🔺Bundling,
      --🔺minifying,
      --🔺cleaning our code(in the sense you'll never ever find console.log() in dist/index.js), 
      --🔺Just taking less time(e.g: 2.07:when we build for production build as compare Development build(try:-> npx parcel src/index.html && for saving as well take too time so for that use above)) it manage 
      --🔺"dev and production Build",
      --🔺super Fast Build algorithm, 
      --🔺parcel does images optimization & compression it also,
      --🔺Caching while Development(just "remove 📂.parcel-cache" & run npx parcel src/index.html) + ctrl+s continusly hit 3 or 4 time so you'll get less time 5s,3s,2s,1s each time hit The whole process is know as reducing the time is  "Caching" 
      --🔺compression(by them term means what it rename Everything go file dist/index.js see at bottom) it supports
      --🔺compatible with older version of browser(it add polyfills)
      --🔺HTTPS on dev(somethimes need to check our app on HTTPS so parcel can give u a that functionality to run our app only https on ""local dev machines"" @👉TYPE:-> npx parcel src/index.html --https took more time to load 400ms] this parcel uses
      --🔺consistent Hashing Algorithm(to cache thing up)
      --🔺Zero Config
      --🔺Tree shaking- remove unwanted-code (let's suppose you'r app importing a library which has lot of function let gives you access 10 or 20 helper function so parcel what does it choose whatever it need among them and other one ignore)

      --🔺Transitive Dependensis(one dependant on another another dependant on another....continue cycle is know as) 

      @↖️--LINK--↙️@

      IF Parcel Is not Responsible for this Then what 🧐??
      :->then The packages,node_modules parcel is not doing in itself they always ask for those packages if you go on packaglockjson find "parcel" you'll get to know it has dependant on anather another dependant on 3rd one ....continue cycle is know as" 😍😍Transitive Dependensis"

      @↖️--LINK--↙️@

      @😗INTERVIEW__PERSPECTIVE😗@
      @-SAYS-@: We've package-manager which handles & takes care of 😍😍transistive dependencies on our Code.

   -@Conclusion:->Pracel take care all the Development and the production defferences.

   -------------)NEW)------------
   Q) 🧐In our Webside, what is most heaviest thing on the webbrowser when we load any website ? what it takes too time to load?
   -> images, media, not node_modules remember(😱Given the fact node_modules not on our webside is it on server Only ""production build"" come to on our webside).

   ->node_modules come absoluterly but in minify form if you take a look on 📂dist folder you'll get.

   ->so to get rid of parcel jump one more time & take care of 🔺image optimization also. make sure you'r images come from project not backend o.w won't work.

    Q)🧐What is caching in JavaScript?
    Caching is the process of storing data in a high-speed storage layer so that future requests for such data can be fulfilled much faster than is possible through accessing its primary storage location

    Q)🧐What is a polyfill & Babel? 
    ->A polyfill allows you to use features that are not supported by a browser (or a specific browser version) by adding a fallback that mimics the desired behavior using supported API.
    -> in other word it is basically a code which is replaceble for a newer version of code let's say you'r browser don't understand the concept of promises(ES6) so it turn it into other peace of code that easy to understand any browser. let's this Array.map() don't understand so it turn it into like that function maMap(){}...another one browser doesn't understand let,const ----> turn it into var.

    😱Given the fact 🧐who convert this newer to older code it's obivious 🔺"Babel"
    Babel use use something know as "browserlist" so it manage the track of which version of code which we working in.
    -Babel is just a "Js package" it is just a "library" it just "node package" takes newer code and turn it into suitable one that is know as polyfill.

   what is Babel  🧐😑?
   it's kind of dependencies which uses parcel and it's use for transpilation. what is ?
   Transpilation is the process of converting a language into an equivalent version of the same language. Modern JavaScript can be transpiled into older syntax, making it compatible with older browsers.

   So I do I make my app compatible with browser 🧐😑??

   @-Search-@:-> Ref:-> ✈️🔗https://www.npmjs.com/package/browserslist

   -It is thing which our code compatible with particular browser
   need to bring some code from browser site and inject it into package.json.
   what you need to inject on that inside ["last 2 versions"] so when i write like this so my app parcel will make sure my app is working in last 2 version of all the browser avalable. 

   Ref:-> ✈️🔗https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
   Ref:-> ✈️🔗https://github.com/browserslist/browserslist#readme [GO and see querry composition & put value A/c to that] e.g "cover 99.5"% instead "last 2 versions"


   what is script elements 🧐😑❓ H.W like 
   <script type="module" src="App.js"/> ❓❓
   https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script


   -------------)NEW)------------
   what does that mean gitignore 🧐😑??
   Do you know git init ? it is basically a command that which will make our Repo compatible with git. once after you'r ready use all the feature like branching,merging,adding all one...

  

   -------------)NEW)------------


   Even parcel remove console.log() from our code if you take look 📂dist/index.js(Hit ctrl+f) 
   did it remove console.log() 🧐😵?? NO, No it's not remove console.log we need to use one package to remove console.log() is that .....

   =>Just recently go to know it not directly remove console.log when you'r using parcel & Babel parcel is not Responsible for this.
   you've to configured you'r project to remove console.log so in order to configured we need one packages to remove console.log that can help us to remove console.log package is 
   @SEARCH@-> ""babel plugin transform runtime remove console""
   Ref: 🔗✈️ https://www.npmjs.com/package/babel-plugin-transform-remove-console

   Ref: 🔗✈️https://babeljs.io/docs/babel-plugin-transform-remove-console/

   remember once aftter install package Need to create one file  📂.babelrc
   it's configuration for babel.
   Now try to hig 
   -🎗️npm run build

   Now one more time check dist/index.js && ctrl+f & search console.log() you'll not able to see 

   Now,come back to code just write
  -🎗️npm run start
   go to webpage; & 3rd file 📂pt_3.js 
   

    


     


 */
