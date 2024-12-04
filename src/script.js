const resizer = document.getElementById('resizer');
const sidebar = document.getElementById('sidebar');

let isResizing = false;

// Mouse events for resizing
resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'ew-resize'; // Change cursor to resizing
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseup', stopResizing);
});

function handleMouseMove(e) {
    if (isResizing) {
        // Get the width based on mouse movement and set it
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 500) { // Min and Max width
            sidebar.style.width = `${newWidth}px`;
        }
    }
}

function stopResizing() {
    isResizing = false;
    document.body.style.cursor = 'default'; // Reset cursor
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
}
