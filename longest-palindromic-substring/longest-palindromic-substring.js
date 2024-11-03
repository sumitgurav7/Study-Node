//https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let left = 0;
    let right = 1;
    let substr = "";
    for(right = 0; right <= s.length; right++){
        for(left =0; left+right <= s.length; left++){
            let loclasubstr = s.substring(left, left+right );
            if(isPalindrome(loclasubstr)){
                substr = loclasubstr;
                break;
            }
        }
    }
    return substr;
};



/**
 * @param {string} s
 * @returns {boolean}
 */
var isPalindrome = function (loclasubstr){
    let pal = loclasubstr.split('').reverse().join('');
    if(loclasubstr == pal){
        return true
    } 
    return false;
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    let left = 0;
    let right = s.length-1;
    let substr = "";
    while(left !== right && left < right ){

        left = left + 1;
        let loclasubstr = s.substring(left, right - left );
        if(isPalindrome(loclasubstr)){
            return loclasubstr;
        }
        right = right - 1;      
        loclasubstr = s.substring(left, right - left);
        if(isPalindrome(loclasubstr)){
            return loclasubstr;
        }  

    }
};

console.log(longestPalindrome("a"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));
