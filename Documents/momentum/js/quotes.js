const quotes = [
    {
        quote: "무릇 의인들의 길은 여호와께서 인정하시나 악인들의 길은 망하리로다",
        author: "잠언 1장 6절"
    },
    {
        quote: "궁핍한 자가 항상 잊어버림을 당하지 아니함이며 가난한 자들이 영원히 실망하지 아니하리로다",
        author: "잠언 9장 18절"
    },
    {
        quote: "악한 자가 교만하여 가련한 자를 심히 압박하오니 그들이 자기가 베푼 꾀에 빠지게 하소서",
        author: "잠언 10장 2절"
    },
    {
        quote: "여호와여 도우소서 경건한 자가 끊어지며 충실한 자들이 인생 중에 없어지나이다",
        author: "잠언 12장 1절"
    },
    {
        quote: "시험을 참는 자는 복이 있나니 이는 시련을 견디어 낸 자가 주께서 자기를 사랑하는 자들에게 "+
               "약속하신 생명의 면류관을 얻을 것이기 때문이라",
        author: "야고보서 1장 12절"
    },
    {
        quote: "천재는 1퍼센트의 영감과 99퍼센트의 땀으로 이루어진다",
        author: "토머스 에디슨"
    },
    {
        quote: "지식인은 문제를 해결하고 천재는 이를 예방한다",
        author: "알버트 아인슈타인" 
    },
    {
        quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다",
        author: "알버트 아인슈타인"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#author span:first-child");

const todaysQuote = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[todaysQuote].quote;
author.innerText = quotes[todaysQuote].author;