/** @jsx h */
import blog, { ga, redirects, h } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title:"디오니소스님 풍악을 울려라",
  description: "이재희의 블로그",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "이재희",
  dateStyle: "full",
  footer: <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16"><p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm"><span>© 2022 이재희</span><a href="/feed" class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" title="Atom Feed"><svg class="inline-block w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path><path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path></svg> RSS</a></p></footer>

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
