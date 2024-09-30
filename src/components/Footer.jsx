import React from 'react';

function Footer() {
    return (
        <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left fixed bottom-0 left-0 w-full">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
            © 2024 Copyright:
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="https://tw-elements.com/"
            >
               Akshat Soni
            </a>
          </div>
        </footer>
    );
}

export default Footer;
