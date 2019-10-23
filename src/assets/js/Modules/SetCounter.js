/*
 *  Example:-
 *  new SetCounter(
 *      '#counter-status',
 *      store.getState().counter.toString()
 *  );
 */
const SetCounter = (selector, counter) => {
    document.querySelector(selector).innerHTML = counter;
};

export default SetCounter;
