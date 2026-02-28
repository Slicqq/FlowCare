import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400 p-8 relative transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
            &copy; {new Date().getFullYear()} FlowCare. All rights reserved. | Professional Healthcare Flow Management.
        </footer>
    );
}
