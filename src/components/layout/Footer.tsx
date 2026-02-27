import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-24 text-center text-sm text-gray-400 p-6">
            &copy; {new Date().getFullYear()} FlowCare. All rights reserved. | Professional Healthcare Flow Management.
        </footer>
    );
}
