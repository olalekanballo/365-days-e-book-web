(function(){
"use strict";
var RAW=[
["January","Fresh Starts",`Your Fresh Page|Share the one word that guides your business this year.
Morning Routine|Show the first ten minutes of your working day.
Coffee Chat|Pour a drink and answer the question you get asked most.
Three Goals|Post your three goals and invite others to share theirs.
Desk Tour|Show your workspace and explain one item on it.
Old Versus New|Compare how you did something last year with how you do it now.
One Small Habit|Share a habit you are building and why it matters.
Meet the Maker|Introduce yourself to new followers in five lines.
Packing the Day|Show what goes into your bag before you leave.
Myth Buster|Name a common myth in your industry and correct it.
Quick Win|Teach one thing customers can fix in five minutes.
Inbox Clean-Out|Share how you organize your messages and orders.
Walk and Think|Post the idea you had on your last walk.
Customer Question|Answer a real question you received this week.
Why Free Tips|Explain why you share helpful advice at no cost.
Tool Shelf|List three tools you use daily and what each does.
Mid-Month Check|Review your goals and share one thing that moved.
Lunch Break Lesson|Share a lesson you learned between meetings.
Before You Buy|List three questions a buyer should ask in your field.
Tiny Offer|Create a small, low-cost offer for new customers.
Mistake I Made|Admit a mistake and say what it taught you.
Ask Me Anything|Open the floor and collect questions for a week.
Work Playlist|Share the music or podcast that fuels your work.
Make a Checklist|Turn a task you repeat into a simple checklist to share.
Reader Reply|Answer a comment publicly with a full reply.
Day in Numbers|Describe your day using numbers only.
Neighbour Spotlight|Feature another small business you admire.
Evening Wind-Down|Show how you close your workday.
Resource Round-Up|Gather five links your audience will bookmark.
Progress Photo|Show the before, during and after of a project.
Month in Review|Summarize the month and thank your audience.`],
["February","Connection",`Hello Again|Message three past customers and ask how they are.
Letter to Customers|Write a short thank-you note and post it.
Origin Story|Tell why you started and who you started it for.
Coffee With a Customer|Invite a customer for a call and share the highlights.
Team Intro|Introduce one person who helps your business run.
Shout-Out|Praise a supplier, partner or helper by name.
Story Swap|Ask followers how they found you.
Handwritten Note|Show a handwritten card going out with an order.
Community Question|Ask an either-or question and share the results.
Partner Post|Create a post with a business that complements yours.
Meal Together|Share what you eat while working and invite swaps.
Values in Action|Show one decision that reflects your values.
Referral Thank-You|Reward someone who sent you a customer.
Customer Spotlight|Feature a customer's result with their permission.
Voice Note|Record a short audio message instead of typing.
Behind a Review|Share a kind review and what it meant to you.
Listening Day|Spend a day listening and share what you heard.
Gift Guide|Suggest gifts from your range for any budget.
Commute Chat|Share what you think about on your way to work.
Local Link|Highlight something good about the place where you work.
Welcome Series|Draft a three-message welcome for new subscribers.
Fan Mail|Share a message you received and say thanks.
Teach a Friend|Explain your work as if to a friend over dinner.
Wish List|Ask what customers wish you offered.
Apology Done Well|Fix a past issue publicly and show what changed.
Weekend Plans|Share how you rest and why rest helps your work.
Two Truths|Share two truths and one myth about you.
Connection Recap|Count the conversations this month and thank everyone.`],
["March","Growth",`Spring Clean|Declutter one part of your business and show it.
Growth Chart|Share one number you want to grow and why.
Learn Something|Start a new skill and post about day one.
Customer Journey|Map how a buyer finds you, step by step.
Better Packaging|Show a small packaging or presentation upgrade.
Ask for Feedback|Send a three-question survey to recent buyers.
Raise a Hand|Share one thing you need help with.
Inspiring People|Celebrate the people who shaped your work.
Time Audit|Track your hours for a day and share the surprise.
Product Deep Dive|Explain one product feature in plain language.
Beginner's Guide|Write the starter guide you wish you had.
Before the Rush|Prepare for your busiest season with a checklist.
Budget Basics|Share one money habit that steadied your business.
Number Day|Share a surprising number about your work.
Mid-Month Reset|Re-plan the second half of the month on a single page.
Case Study|Describe a customer problem and how you solved it.
Lucky Find|Share a tool, book or person you discovered by chance.
Slow Down|Explain one thing you stopped doing and why.
Compare Options|Create a simple table comparing your offers.
Day and Night|Show your business at opening and at closing time.
Changed My Mind|Share a belief you changed your mind about.
Water Cooler|Post the conversation topic of the week.
Upgrade Offer|Invite past buyers to upgrade at a fair price.
Show Your Process|Photograph each stage of making or delivering.
Customer Wins|Collect three wins your customers reported.
Podcast Pick|Recommend one episode and what you took from it.
Trial Run|Test a new idea with five people first.
Simplify|Remove one step from your sales process.
Reading List|Share the book on your desk right now.
Quarter Check|Look back at three months and plan the next three.
Gratitude List|Thank five people who helped this quarter.`],
["April","Behind the Scenes",`Playful Post|Share a light-hearted moment from your workday.
Packing Table|Show how an order gets packed or prepared.
Tools of the Trade|Lay out everything you use for one job.
Supplier Call|Talk to a supplier and share what you learned.
Blooper Reel|Share an outtake from your last shoot or job.
Early Start|Show what happens before customers arrive.
Material Story|Explain where one material or ingredient comes from.
Sketch to Final|Show the first sketch beside the finished work.
Rules of Thumb|Share three shortcuts you use daily.
Quality Check|Show how you inspect your work before sending.
Day in the Life|Post six photos from one ordinary day.
Machine Talk|Explain the equipment you could not work without.
Time-Lapse|Record a task from start to finish and speed it up.
Failed Attempt|Show something that did not work and why.
Shipping Day|Capture the moment parcels leave your door.
Workspace Fix|Share a problem in your space and how you solved it.
Ask the Expert|Invite a specialist to answer your audience's questions.
Rainy Day Plan|Share how you work when plans change.
Meet the Product|Introduce one product as if it were a person.
Behind the Price|Break down what goes into one price.
Training Day|Show how you teach someone new your process.
Greener Habit|Share one small change that reduces waste.
Page Turner|Share an idea from a book that shaped your work.
Mess to Order|Show a cluttered corner becoming tidy.
Skill Share|Teach a small technique you use every day.
Service Desk|Show how you handle a tricky message.
Calendar Peek|Show how you plan your week.
Pet or Plant|Introduce the mascot of your workspace.
Draft Folder|Reveal an unfinished idea and ask for input.
Month Recap|Collect the month's best behind-the-scenes moments.`],
["May","Customers",`New Month Welcome|Welcome new followers and share what to expect.
Customer Persona|Describe your ideal customer in one paragraph.
Review Request|Ask three happy customers for a review.
Pain Point|Name the biggest problem your customers face.
FAQ Post|Turn your five most asked questions into one post.
Unboxing|Show a customer's unboxing or first use, with permission.
Real Results|Share a result with numbers and a short quote.
Caring Hands|Celebrate someone who cares for others.
Customer Voice|Quote a customer and explain what you changed.
Choose Your Own|Let customers vote on your next product or topic.
First Purchase|Tell the story of your first sale.
Loyalty Perk|Create a small reward for repeat buyers.
Clear Returns|Rewrite your return policy in friendly plain words.
Support Hours|Share when and how people can reach you.
Mid-Month Mailer|Send an email with one tip and one offer.
Customer Map|Pin where your customers live and say hello.
Wrong Fit|Explain who your product is not for.
Delivery Story|Share a delivery that went above and beyond.
Customer Quiz|Create a three-question quiz that matches people to products.
Price Honesty|Explain why your prices are what they are.
Complaint to Fix|Share one complaint and the fix it led to.
Quick Tip|Give a 30-second tip that saves customers time.
Compare and Choose|Help customers choose between two of your items.
Social Proof|Collect screenshots of kind messages into one post.
Care Guide|Teach how to look after what you sell.
Before and After|Show a customer's change, with permission.
Surprise Extra|Add a small unexpected gift and share the reaction.
Customer Birthday|Offer a note or discount on a customer's special day.
Waiting Room|Make waiting easier with updates and small tips.
Wish Granted|Deliver something customers asked for and say so.
Thank-You Note|End the month with a heartfelt thank you.`],
["June","Mid-Year Check",`Halfway Plan|Write what you want finished by the end of the year.
Goal Scorecard|Mark each yearly goal as done, moving or stuck.
Best Seller|Explain why one product sells most.
Slowest Seller|Share what you learned from your slowest product.
Money Look|Share one lesson from your first-half finances.
Energy Map|List tasks that drain you and tasks that give you energy.
Stop Doing|Pick one task to drop for the next six months.
Customer Count|Share a milestone and thank those who got you there.
Skills Gained|List what you learned since January.
Time Capsule|Write a note to yourself for December.
Reader Poll|Ask what your audience wants more of.
Fix the Leak|Find one place you lose time or money.
Reorder Review|Check stock and supplies for the second half.
Mid-Month Pause|Take a break and share how you rest.
Network Chat|Reach out to three peers for advice.
Report Card|Grade your business honestly and explain why.
Content Audit|Find your best-performing post and make a sequel.
Tidy Files|Organize your digital files and show the system.
Pricing Review|Check whether your prices still match your costs.
Long Day|Describe your longest working day and what kept you going.
Fast Fixes|Share three quick wins from this month.
Hire or Outsource|Decide which task to hand off next.
Podcast Guest|Pitch yourself to speak on someone's show.
Refresh Page|Update your bio, photos and about section.
Wins Wall|Post your five biggest wins so far.
Lesson Letter|Write a short letter to a beginner in your field.
Plan B|Describe your backup plan and why it matters.
Look Ahead|Preview what you will launch soon.
Review Day|Reply to reviews you have not yet answered.
Half-Year Thanks|Thank your audience for the first half.`],
["July","Movement and Energy",`New Half Start|Announce your top goal for the next six months.
Morning Stretch|Share how you wake up your body before work.
Travel Work|Show how you work away from your desk.
Outdoor Office|Take one task outside and post the view.
Water Break|Remind your audience to pause and drink water.
Energy Snack|Share what you eat when you need focus.
Short Sprint|Do a 25-minute work sprint and share the output.
Commute Hack|Show how you use travel time well.
Flash Offer|Run a 24-hour offer with a clear start and end.
Walking Meeting|Hold a call while walking and share what you gained.
Shared Playlist|Ask followers for songs that keep them moving.
Sunlight Habit|Share a daily habit that lifts your mood.
Quick Recipe|Share a simple meal that fits a busy day.
Seven-Day Challenge|Invite your audience to a week-long challenge.
Reset Hour|Block one hour for a task you keep delaying.
Home Fix|Show a small repair or upgrade you did yourself.
Mini Holiday|Plan a short break and share how you prepare.
Fitness for Founders|Share a movement habit that fits a business day.
Local Adventure|Visit somewhere nearby and share the lesson.
Weather Plan|Share how weather changes your day and your sales.
Bike or Bus|Show how you get around and what you notice.
Sell the Season|Pair your product with what people do this time of year.
Pack Light|Share what you can't leave out when you travel.
Mood Board|Gather images that describe your current mood.
Speed Round|Answer ten questions in sixty seconds.
Swap Tasks|Do one task a new way and report back.
Evening Stroll|Share the thought that came to you on a walk.
Skill Sprint|Learn something small in one hour.
Energy Audit|Track when you feel best and schedule key work then.
Share the Load|Ask for help and thank those who offer.
Month Moves|List the three biggest moves of the month.`],
["August","Learning",`Back to Class|Choose one course or book to finish this month.
Study Corner|Show where you learn and how you stay focused.
Beginner Mistakes|List mistakes newcomers in your field make.
Glossary|Define five terms your customers keep asking about.
Teach in Three|Explain a big idea in three simple steps.
Notes Page|Share your notes from something you learned this week.
Mentor Message|Thank a mentor and share their best advice.
Quick Course|Outline a mini-lesson you could teach in ten minutes.
Read Along|Start a reading club with your audience.
Library Visit|Share what you found at a library or archive.
Myth Versus Fact|Pair three beliefs with three facts.
Question Jar|Draw one audience question and answer it.
Try Something New|Attempt a task outside your comfort zone and share it.
Industry Quiz|Quiz your audience on your industry.
Cheat Sheet|Make a one-page summary of your best advice.
Language Tip|Teach a phrase useful for your customers.
Tool Tutorial|Show how to use a tool step by step.
Learn From Rivals|Share what you admire about a competitor.
Webinar Plan|Outline a free session and invite sign-ups.
Skill Swap|Offer to trade skills with another owner.
Expert Interview|Ask a specialist three questions.
Flashcards|Turn your key lessons into five flashcards.
Data Story|Explain what one chart taught you.
Learning Log|Share what you learned in the last 30 days.
Common Confusion|Clear up the most confusing part of your offer.
Mini Workshop|Teach a small group something hands-on.
Reading Nook|Share the corner where you read.
Repeat to Remember|Revisit an old tip with a fresh example.
Proud Pupil|Celebrate a customer who learned a new skill.
Graduation|Mark the end of a learning goal with a post.
Next Chapter|Choose what to learn next and say why.`],
["September","Routines",`New Season Plan|Reset your weekly rhythm and share the schedule.
Alarm Clock|Share when you wake and what you do first.
Weekly Template|Show a template you use to plan the week.
Inbox Rules|Explain when you check messages and why.
Batch Day|Make a week of content in one sitting.
Lunch Routine|Share how you break for lunch.
Closing Ritual|Describe what you do to end your workday.
Habit Stack|Attach a new habit to an existing one.
Meeting Rules|Share how you keep meetings short.
Standing Order|Offer a subscription or repeat order.
Focus Rounds|Try timed focus rounds and report the results.
Morning Pages|Share what you write before work.
Cleaning Cycle|Show a quick weekly tidy of your workspace.
Rhythm Review|Review which routines helped and which did not.
Bedtime Plan|Share how you prepare for good sleep.
Invoice Day|Set a fixed day for billing and explain it.
Content Calendar|Show how you plan posts a month ahead.
Phone-Free Hour|Take one hour without a phone and share it.
Repeat Customer|Thank someone who has bought many times.
Task Board|Show your to-do board and how you sort it.
Gratitude Minute|Add a minute of thanks to your day.
Season Switch|Update your offers for the changing weather.
Daily Three|Pick three tasks that matter most today.
Quiet Hours|Set boundaries and share them kindly.
Planner Peek|Show a page from your planner.
Automate It|Pick one repeated task and automate it.
Rest Day Prep|Show what you prepare before your day off.
Weekly Review|Do a weekly review and share the questions you use.
Habit Report|Share which habits stuck.
Routine Recap|Pick the routine you will keep.`],
["October","Stories",`Story Month|Choose a theme and plan to tell stories all month.
First Day|Tell the story of your first day in business.
Customer Tale|Turn a customer experience into a short story.
The Setback|Share a hard moment and how you got through it.
Object Story|Choose an object on your desk and tell its story.
Elder Advice|Share advice from someone older that you use at work.
Turning Point|Describe the moment things changed.
The Long Way|Tell about a time the slow path paid off.
Letter to Past Self|Write what you would tell yourself on day one.
Mini Fable|Write a short fable that explains your service.
Market Day|Describe the busiest day you ever had.
Sound of Work|Describe the sounds in your workspace.
Lucky Break|Share how luck met preparation.
Funny Story|Share a small funny story from this week.
Midday Reset|Share what you do at midday to clear your head.
Street Scene|Describe what you pass on your way to work.
Hidden Helper|Tell how someone helped you get here.
The Wrong Turn|Tell about a plan that went sideways.
Customer Quote|Build a post around one line a customer said.
Kitchen Table|Tell how your business started at home.
Season of Change|Describe how your business changed this year.
Overheard|Share something you overheard that sparked an idea.
Photo Story|Tell a story using only three photos.
Failure Fix|Tell about a failure that led to a better product.
Newcomer's Fear|Reveal what scares newcomers in your industry.
Old Photo|Share an old photo and what has changed.
Voice of the Place|Tell what makes your location special.
A Day That Mattered|Describe one day that shaped your path.
Story Swap Two|Invite followers to share their own stories.
Moral of the Month|Share the lesson behind the month's stories.
Try On a Role|Show your work through a customer's eyes.`],
["November","Gratitude",`Thank-You Month|Announce a month of thanking people.
Supplier Thanks|Thank those who supply you.
Team Thanks|Thank those who work beside you.
First Customer|Write a note to your first customer.
Home Support|Thank those who support you at home.
Small Gesture|Do a kind act for a customer and share it.
Mentor Thanks|Say thanks to someone who guided you.
Thankful Table|Share a meal you are grateful for.
Thankful Tool|Thank the tool that saves you the most time.
Gratitude Giveaway|Give something free to a loyal customer.
Quiet Heroes|Honour people whose work usually goes unseen.
Gratitude Wall|Collect thank-you messages from your audience.
Kindness Chain|Pass a kind gesture forward and invite others to do the same.
Three Good Things|Share three small things that went well.
Offer Plan|Plan your end-of-year offer.
Offer Preview|Tease your biggest offer of the year.
Gift Bundle|Group products into a ready-made gift set.
Early Bird|Reward early buyers with a bonus.
Charity Choice|Donate part of a sale and show where it went.
Waiting List|Open a list for a limited product.
Future Customers|Write a letter to the customers you have not met yet.
Sale Checklist|Prepare stock, copy and support before a big sale.
Offer Rules|Explain the terms of your offer clearly.
Last-Minute Gifts|Suggest quick gifts for late shoppers.
Small Business Day|Encourage people to support small shops.
Sale Day|Launch your big offer with a simple message.
Offer Reminder|Remind your list the offer ends soon.
Sold Out|Announce what sold and thank buyers.
Order Updates|Send clear shipping updates to your buyers.
Gratitude Close|Share your top thanks of the month.`],
["December","Reflection and Offers",`Final Month|List what you will finish before the year ends.
Year in Photos|Choose twelve photos, one for each month.
Best Moments|Share your top three moments this year.
Hardest Lesson|Share the hardest lesson and its value.
Numbers Review|Show your growth in one simple chart.
Reader Favorites|Reshare your most-loved posts.
Wrap-Up Offer|Offer a year-end bundle.
Gift Cards|Add a gift card option for last-minute buyers.
Customer Count-Up|Share how many people you served this year.
Mistakes Index|List mistakes you will not repeat.
Thank Your Team|Write a card to everyone who helped.
Holiday Hours|Post when you will be open and closed.
Year-End Letter|Write a letter to customers with your plans.
Goal Ratings|Rate each goal from this year.
Cleaning House|Archive files, clear tasks and tidy accounts.
Next Year Wish|Share one wish for next year.
Surprise Gift|Send a small gift to loyal buyers.
Kind Words|Share the nicest thing someone said this year.
Next Year Budget|Draft a simple budget for next year.
Content Plan|Outline the first quarter's content.
Quiet Evening|Share how you rest at the end of the year.
Behind the Year|Show the unseen work of the year.
Slow Down|Pause outreach and invite your audience to rest.
Warm Wishes|Send a short greeting to your list.
Rest Day|Take a day away and share how you rested.
Returns Ready|Prepare to handle returns and exchanges kindly.
Quiet Planning|Choose your word for next year.
Best-Of Roundup|Collect your best tips into one post.
Thank-You List|Name ten people you want to thank.
Goals Draft|Write rough goals for January.
Year Closed|Share one line to close the year.`]
];
var MLEN=[31,28,31,30,31,30,31,31,30,31,30,31];
var SHORT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var IDEAS=[];
RAW.forEach(function(m,mi){
  m[2].split("\n").forEach(function(l,di){
    var p=l.split("|");
    IDEAS.push({i:IDEAS.length,m:mi,d:di+1,title:p[0],prompt:p[1],month:m[0],theme:m[1]});
  });
});
function $(id){return document.getElementById(id);}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function idxOf(m,d){var n=0;for(var k=0;k<m;k++)n+=MLEN[k];return n+d-1;}
function todayIdx(){var t=new Date(),m=t.getMonth(),d=t.getDate();if(d>MLEN[m])d=MLEN[m];return idxOf(m,d);}

function cardHTML(it){
  return '<article class="idea"><div class="meta">Page '+(it.i+1)+' of 365 · '+esc(it.month)+' '+it.d+'</div>'+
    '<h3>'+esc(it.title)+'</h3><p>'+esc(it.prompt)+'</p>'+
    '<div class="actions"><button class="btn small" type="button" data-copy="'+it.i+'">Copy idea</button></div></article>';
}
var toastT;
function toast(msg){var t=$("toast");t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(function(){t.hidden=true;},1800);}
document.addEventListener("click",function(e){
  var c=e.target.closest("[data-copy]");if(!c)return;
  var it=IDEAS[+c.getAttribute("data-copy")],txt=it.title+"\n"+it.prompt;
  var ok=function(){toast("Idea copied");};
  var fb=function(){var ta=document.createElement("textarea");ta.value=txt;document.body.appendChild(ta);ta.select();
    try{document.execCommand("copy");ok();}catch(x){toast("Select the text to copy it");}document.body.removeChild(ta);};
  try{navigator.clipboard.writeText(txt).then(ok,fb);}catch(x){fb();}
});

/* garden */
var perm=[],opened={},openCount=0,garden=$("garden");
function shuffle(){perm=[];for(var i=0;i<365;i++)perm.push(i);
  for(var j=364;j>0;j--){var k=Math.floor(Math.random()*(j+1)),t=perm[j];perm[j]=perm[k];perm[k]=t;}}
(function(){var h="";for(var k=0;k<365;k++){h+='<button type="button" class="flower" data-k="'+k+'" aria-label="Flower '+(k+1)+', tap to reveal an idea"><svg viewBox="-20 -20 40 40" aria-hidden="true"><use href="#fl"/></svg></button>';}garden.innerHTML=h;})();
var EMPTY='<div class="empty-card"><svg viewBox="-20 -20 40 40" aria-hidden="true"><use href="#fl"/></svg><p>Your idea will bloom here. Tap any flower above.</p></div>';
$("pickCard").innerHTML=EMPTY;
shuffle();
garden.addEventListener("click",function(e){
  var b=e.target.closest(".flower");if(!b)return;
  var k=+b.getAttribute("data-k"),prev=garden.querySelector(".flower.sel");
  if(prev)prev.classList.remove("sel");
  b.classList.remove("bloom");void b.offsetWidth;b.classList.add("sel","opened","bloom");
  if(!opened[k]){opened[k]=true;openCount++;}
  $("opened").textContent=openCount+" opened";
  $("pickCard").innerHTML=cardHTML(IDEAS[perm[k]]);
});
$("shuffleBtn").addEventListener("click",function(){
  shuffle();opened={};openCount=0;
  Array.prototype.forEach.call(garden.children,function(f){f.classList.remove("opened","sel");});
  $("opened").textContent="0 opened";$("pickCard").innerHTML=EMPTY;
  garden.classList.remove("shuffling");void garden.offsetWidth;garden.classList.add("shuffling");setTimeout(function(){garden.classList.remove("shuffling");},800);
});

/* finder */
var cur=todayIdx(),monthSel=$("monthSel"),daySel=$("daySel");
RAW.forEach(function(m,i){var o=document.createElement("option");o.value=i;o.textContent=m[0];monthSel.appendChild(o);});
function sync(){
  var it=IDEAS[cur];
  monthSel.value=it.m;daySel.innerHTML="";
  for(var d=1;d<=MLEN[it.m];d++){var o=document.createElement("option");o.value=d;o.textContent=d;daySel.appendChild(o);}
  daySel.value=it.d;$("findCard").innerHTML=cardHTML(it);
}
monthSel.addEventListener("change",function(){var m=+monthSel.value;cur=idxOf(m,Math.min(IDEAS[cur].d,MLEN[m]));sync();});
daySel.addEventListener("change",function(){cur=idxOf(+monthSel.value,+daySel.value);sync();});
$("prevBtn").addEventListener("click",function(){cur=(cur+364)%365;sync();});
$("nextBtn").addEventListener("click",function(){cur=(cur+1)%365;sync();});
$("todayBtn").addEventListener("click",function(){cur=todayIdx();sync();});
$("q").addEventListener("input",function(){
  var q=this.value.trim().toLowerCase(),box=$("results");
  if(q.length<2){box.innerHTML="";return;}
  var hits=IDEAS.filter(function(x){return (x.title+" "+x.prompt).toLowerCase().indexOf(q)>-1;});
  if(!hits.length){box.innerHTML='<p class="muted">No ideas match. Try a shorter word.</p>';return;}
  box.innerHTML=hits.slice(0,8).map(function(x){return '<button type="button" data-hit="'+x.i+'"><span class="d">'+SHORT[x.m]+' '+x.d+'</span><b>'+esc(x.title)+'</b></button>';}).join("");
});
$("results").addEventListener("click",function(e){var b=e.target.closest("[data-hit]");if(!b)return;cur=+b.getAttribute("data-hit");sync();$("findCard").scrollIntoView({behavior:"smooth",block:"center"});});

/* inside */
$("months").innerHTML=RAW.map(function(m){return '<li><b>'+m[0]+'</b><br><span class="muted">'+esc(m[1])+'</span></li>';}).join("");

$("buyBtn").addEventListener("click",function(){$("buyNote").hidden=false;});
sync();
})();
