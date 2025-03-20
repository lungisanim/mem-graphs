import Image from "next/image";
import { currentYear } from "../utilities/helpers";
import { useState } from "react";

export default function Footer()
{
    const [getCurrentYear] = useState(currentYear);

    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lungisanim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github Repositories
        </a>
        <a
          className="flex items-center gap-2 "
          rel="noopener noreferrer"
        >
          {getCurrentYear}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nhlengethwa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          https://nhlengethwa.netlify.app/
        </a>
      </footer>
    );
};