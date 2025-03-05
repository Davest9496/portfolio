import React from 'react'

function Copyright() {
  return (
    <div className="mt-8">
      <p className="text-xs text-highlight pb-20">
        <span>Copyright</span> © {new Date().getFullYear()} 
      </p>
    </div>
  );
}

export default Copyright