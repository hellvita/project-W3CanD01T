import Pagination from 'tui-pagination';

const container = document.getElementById('pagination');

const prevIcon = `
    <svg width="14" height="14" class="left-arrow">
    <use href="/img/icons.svg#arrow-left"></use>  
    </svg>
`;
const nextIcon = `
    <svg width="14" height="14" class="right-arrow">
    <use href="/img/icons.svg#arrow-right"></use>  
    </svg>
`;

const options = {
    totalItems: 70,
    itemsPerPage: 10,
    visiblePages: 3,
    centerAlign: true,
    usageStatistics: false,
    template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',

    moveButton: function({ type }) {
        if (type === 'prev') {
        return `<a href="#" class="tui-page-btn tui-prev">${prevIcon}</a>`;
        }
        if (type === 'next') {
        return `<a href="#" class="tui-page-btn tui-next">${nextIcon}</a>`;
        }
        return '<span style="display:none"></span>'; 
    },

    disabledMoveButton: function({ type }) {
        if (type === 'prev') {
        return `<span class="tui-page-btn tui-is-disabled tui-prev">${prevIcon}</span>`;
        }
        if (type === 'next') {
        return `<span class="tui-page-btn tui-is-disabled tui-next">${nextIcon}</span>`;
        }
        return '<span style="display:none"></span>';
    },
        moreButton({ type }) {
        if (type === 'next') {
            return '<a href="#" class="tui-page-btn tui-next-is-more"><span class="tui-ico-ellip">...</span></a>';
        }
            return '<a href="#" class="tui-page-btn tui-prev-is-more"><span class="tui-ico-ellip">...</span></a>';
    },
    },
};

const pagination = new Pagination(container, options);

pagination.on('afterMove', (event) => {
    console.log('Current page: ', event.page);
});
