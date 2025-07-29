import { Twitter, Github, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex mt-10 sm:mt-4 md:mt-0 flex-col items-center justify-center pb-5 text-sm lg:pb-0 lg:pt-20 text-gray-200 lg:flex-row opacity-60">
      <a
        href="https://www.linkedin.com/in/ashutosh-dureja-919072209/"
        target="_blank"
        className="flex items-center hover:underline"
      >
        <span className="w-5 h-5 mx-1">
          <Twitter className="w-full h-full" />
        </span>
        Created by Ashu Dureja
      </a>
      <span className="hidden px-2 lg:block">-</span>
      <a
        href="https://github.com/ashudureja?tab=overview&from=2025-06-01&to=2025-06-30"
        target="_blank"
        className="flex items-center mt-2 hover:underline lg:mt-0"
      >
        <span className="w-5 h-5 mx-1">
          <Github className="w-full h-full" />
        </span>
        View Code on Github
      </a>
      <span className="hidden px-2 lg:block">-</span>
      <a
        href="https://www.instagram.com/ashudureja_/"
        target="_blank"
        className="flex items-center mt-2 hover:underline lg:mt-0"
      >
        <span className="w-5 h-5 mx-1">
          <Coffee className="w-full h-full" />
        </span>
        Buy me a coffee
      </a>
    </div>
  );
}