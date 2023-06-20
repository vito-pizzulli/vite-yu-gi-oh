import { reactive } from 'vue';

const store = reactive({
    yugiohApi: '',
    cardsLoading: true,
    noCardsFound: false
})

export { store }