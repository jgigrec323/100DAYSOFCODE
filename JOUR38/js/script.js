(function() {

    const quotesEl = document.querySelector('.quotes');
    const loaderEl = document.querySelector('.loader');

    const getQuotes = async(page, limit) => {
        const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`An error occured:${response.status}`);
        }

        return await response.json();
    }

    const showQuotes = (quotes) => {
        quotes.forEach(quote => {
            const quoteEl = document.createElement('blockquote');
            quoteEl.classList.add('quote');

            quoteEl.innerHTML = `
            <span>${quote.id})</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
        `;

            quotesEl.appendChild(quoteEl);
        });
    };

    const hideloader = () => {
        loaderEl.classList.remove('show')
    }
    const showLoader = () => {
        loaderEl.classList.add('show')
    }

    const hasMoreQuotes = (page, limit, total) => {
        const startIndex = (page - 1) * limit + 1;
        return total === 0 || startIndex < total;
    };

    const loadQuotes = async(page, limit) => {
        showLoader();

        setTimeout(async() => {
            try {
                if (hasMoreQuotes(page, limit, total)) {
                    const response = await getQuotes(page, limit);

                    showQuotes(response.data);

                    total = response.total;
                }
            } catch (error) {
                console.log(error.message)
            } finally {
                hideloader();
            }
        }, 500)
    }

    let currentPage = 1;
    const limit = 10;
    let total = 0;

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5 &&
            hasMoreQuotes(currentPage, limit, total)) {
            currentPage++;
            loadQuotes(currentPage, limit);
        }
    }, {
        passive: true
    });

    // initialize
    loadQuotes(currentPage, limit);

})();