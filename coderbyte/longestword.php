<!-- 
Challenge
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

Sample Test Cases

Input:"fun&!! time"
Output:"time"


Input:"I love dogs"
Output:"love"
 -->

<?php 

function LongestWord($sen) {  

$frase_array = str_word_count($sen, 1);
$longestLength = 0;


foreach ($frase_array as $key => $value) {

	$wordLength = strlen($value);
		
	if ($longestLength < $wordLength) {
		$longestLength = $wordLength;
		$longestWord = $value;
	    }
	}

return $longestWord;
         
}
?>
