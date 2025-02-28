import { getAllImages } from './js/pixabay-api';
import { imageTemplate, imagesTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  btnNext: document.querySelector('.gallery-btn'),
  loader: document.querySelector('.loader'),
};

let lightbox;
const params = {
  message: null,
  page: null,
  total: null,
  perPage: 40,
};

hidebtnNext();
refs.form.addEventListener('submit', searchImages);

async function searchImages(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  showLoader();

  const message = e.target.elements.search.value.trim();
  params.message = message;
  params.page = 1;

  try {
    const result = await getAllImages(
      params.message,
      params.page,
      params.perPage
    );

    if (result.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        messageSize: '16px',
        messageLineHeight: '24px',
        maxWidth: '432px',
      });
    } else {
      const markup = imagesTemplate(result.hits);
      refs.gallery.innerHTML = markup;
      params.total = result.totalHits;

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a');
      }
    }
  } catch (error) {
    refs.gallery.innerHTML = '';
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      backgroundColor: '#B51B1B',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    console.log(error);
  }

  hideLoader();
  checkBtnStatus();

  e.target.reset();
}

refs.btnNext.addEventListener('click', async () => {
  params.page += 1;
  showLoader();
  hidebtnNext();
  const result = await getAllImages(
    params.message,
    params.page,
    params.perPage
  );

  const markup = imagesTemplate(result.hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }

  hideLoader();
  checkBtnStatus();
});

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.gallery.classList.add('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}

function showbtnNext() {
  refs.btnNext.style.display = '';
}

function hidebtnNext() {
  refs.btnNext.style.display = 'none';
}

function checkBtnStatus() {
  const perPage = params.perPage;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hidebtnNext();
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showbtnNext();
  }
}
