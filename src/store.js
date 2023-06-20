import { reactive } from 'vue';

const store = reactive({
    yugiohApi: '',
    cardsLoading: true,
    searchDone: false,
    noCardsFound: false
})

export { store }