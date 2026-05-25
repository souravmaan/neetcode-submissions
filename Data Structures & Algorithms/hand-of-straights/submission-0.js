class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        hand.sort((a,b)=> a - b);
        const cardCount = new Map();
        for (let i = 0; i < hand.length; i++) {
            if (cardCount.has(hand[i])) {
                cardCount.set(hand[i], cardCount.get(hand[i]) + 1);
            } else {
                cardCount.set(hand[i], 1);
            }
        }
        
        for (let i = 0; i < hand.length; i++) {
            console.log(hand[i], cardCount);
            if (cardCount.get(hand[i]) > 0) {
                const val = hand[i]
                const max = val + groupSize - 1;
                console.log('----',max);
                
                cardCount.set(val, cardCount.get(val) - 1);
                for (let j = val; j < max; j++) {
                    console.log(j, cardCount.get(j+1));
                    if (!cardCount.get(j+1) || cardCount.get(j + 1) <=0){
                        return false;
                    }
                    const curr = cardCount.get(j +1);
                    cardCount.set(j + 1, curr -1);
                }
            }
        }

        return true;
    }
}
