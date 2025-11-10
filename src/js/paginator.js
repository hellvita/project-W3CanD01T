import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs.js';
import icons from '../img/icons.svg';

export function initPagination() {
    const { paginationContainer } = refs;
    if (!paginationContainer) {
    console.error('Pagination container not found in DOM');
    return;
    }

    const prevIcon = `
    <svg width="14" height="14" class="left-arrow">
    <use href="${icons}#arrow-left"></use>  
    </svg>
    `;

    const nextIcon = `
    <svg width="14" height="14" class="right-arrow">
        <use href="${icons}#arrow-right"></use>  
    </svg>
`;

    const options = {
    totalItems: 70,
    itemsPerPage: 8,
    visiblePages: 4,
    centerAlign: true,
    template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',

    moveButton({ type }) {
        if (type === 'prev') {
        return `<a href="#" class="tui-page-btn tui-prev">${prevIcon}</a>`;
        }
        if (type === 'next') {
        return `<a href="#" class="tui-page-btn tui-next">${nextIcon}</a>`;
        }
        return '<span style="display:none"></span>';
    },

    disabledMoveButton({ type }) {
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

const furniturePagination = new Pagination(paginationContainer, options);

    furniturePagination.on('afterMove', event => {
    console.log('Current page:', event.page);
});
}
