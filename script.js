// Add any interactivity if needed (e.g., confirmation dialogs)
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.underline');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.textContent === 'here') {
                // Optional: Add confirmation or other logic
                console.log('Navigating to password reset instructions...');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!dropdownBtn.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing dropdown toggle logic
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', () => {
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        window.addEventListener('click', (event) => {
            if (!dropdownBtn.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    }

    // Existing tile color change logic
    const currentPage = window.location.pathname.split('/').pop();

    const tilePageMap = {
        'homepage-a.html': { tileId: 'homepage-tile', color: '#28a745' },
        'academics.html': { tileId: 'academics-tile', color: '#dc3545' },
        'financials.html': { tileId: 'financials-tile', color: '#dc3545' },
    };

    const defaultColor = '#f5a623';

    document.querySelectorAll('.tile').forEach(tile => {
        tile.style.backgroundColor = defaultColor;
    });

    for (const [page, { tileId, color }] of Object.entries(tilePageMap)) {
        if (currentPage === page || (currentPage === '' && page === 'homepage-a.html')) {
            const tile = document.getElementById(tileId);
            if (tile) {
                tile.style.backgroundColor = color;
            }
        }
    }

    if (currentPage === 'homepage-a.html' || currentPage === '') {
        const homepageTile = document.getElementById('announcements-tile');
        if (homepageTile) {
            homepageTile.style.backgroundColor = '#28a745';
        }
    }

    // Pagination bar logic (placeholder)
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const moreOptions = document.querySelector('.pagination-more');

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            console.log('Left arrow clicked');
            // Add logic to go to the previous page
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            console.log('Right arrow clicked');
            // Add logic to go to the next page
        });
    }

    if (moreOptions) {
        moreOptions.addEventListener('click', () => {
            console.log('More options clicked');
            // Add logic to show more pagination options (e.g., a dropdown)
        });
    }
});