---
layout: post
title:  "My New Website!"
date:   2016-10-04 12:18:45 -0400
categories: blog
image: /resources/jekyll.jpg
---

Hello, my name is John Eletto and welcome to the new version of my website. This is the sixth version of my site since I
keep coming up with new ideas and can't settle for anything except the image in my head. This design can very well
change soon.

This is the first iteration in which I used Jekyll. Jekyll is a static site generator that is ready for blogs. I 
discovered this platform while researching how to use Wordpress. Jekyll is similar to Wordpress, except it's a 
little more simple. However, in order to use Jekyll, you must have a pretty good understanding of code. They say 
that using Jekyll is "Blogging Like A Hacker." However, this doesn't bother me. I like this platform.

I decided to use Jekyll for my site becuase since my resume and portfolio are always updating. I can easily add new jobs
and projects using it. Jekyll uses markdown files in order to add content and blog posts to your site. Below is an
example markdown file that I used to add my jobs. 

{% highlight ruby %}

---
jobTitle: "Ocean Lifeguard"
employer: "Town of Hempstead"
dates: "June 2013-September 2014"
categories: job
image: /resources/bouey2.jpg
---
<ul>
    <li>Set up rescue equipment for it to be ready in the event of an emergency.</li>
    <li>Maintain continuous surveillance on the ocean.</li>
    <li>Spot rip tides and prevent pedestrians from traveling into them.</li>
    <li>Perform rescues in the event of drowning or swimming problems.</li>
    <li>Perform first aid and CPR according to the demands of a situation.</li>
</ul>

{% endhighlight %}

In this file, I specify all of the fields that I'd like to include on my site, then I head over to my HTML file and I
can show use a loop to print the content for the number posts that I have. You can check out all of my code on GitHub!
I will most likely continue to use Jekyll since I'm really liking it so far. 

Thanks for reading!<br/>
-John
