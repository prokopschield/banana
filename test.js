var assert = require('assert');
var banana = require('./');

assert.equal("Banana", banana(), "Should give Banana");

var isLongerThan = banana.isLongerThan("Dog");
assert.equal(true, isLongerThan, "Dog has less characters than Banana, so it sould be false");

assert.equal("موز", banana.arabic(), "Banana should be موز in arabic");
assert.equal("banan", banana.azerbaijani(), "Banana should be banan in azerbaijani");
assert.equal("platano", banana.basque(), "Banana should be platano in basque");
assert.equal("банан", banana.belarusian(), "Banana should be банан in belarusian");
assert.equal("ငှက်ပျောသီး", banana.burmese(), "Banana should be ငှက်ပျောသီး in burmese");
assert.equal("plàtan", banana.catalan(), "Banana should be plàtan in catalan");
assert.equal("saging", banana.cebuano(), "Banana should be saging in cebuano");
assert.equal("香蕉", banana.chinese(), "Banana should be 香蕉 in chinese");
assert.equal("香蕉", banana.chinese("mandarin"), "Banana should be 香蕉 in mandarin");
assert.equal("香蕉", banana.chinese("cantonese"), "Banana should be 香蕉 in cantonese");
assert.equal("banán", banana.czech(), "Banana should be banán in czech");
assert.equal("banan", banana.dutch(), "Banana should be banan in dutch");
assert.equal("banano", banana.esperanto(), "Banana should be banano in esperanto");
assert.equal("banana", banana.english(), "Banana should be banana in english");
assert.equal("banaan", banana.estonian(), "Banana should be banaan in estonian");
assert.equal("saging", banana.filipino(), "Banana should be saging in filipino");
assert.equal("banaani", banana.finnish(), "Banana should be banaani in finnish");
assert.equal("banane", banana.french(), "Banana should be banane in french");
assert.equal("ბანანი", banana.georgian(), "Banana should be ბანანი in georgian");
assert.equal("Banane", banana.german(), "Banana should be Banane in german");
assert.equal("μπανάνα", banana.greek(), "Banana should be μπανάνα in greek");
assert.equal("બનાના", banana.gujarati(), "Banana should be બનાના in gujarati");
assert.equal("bannann", banana.haitianCreol(), "Banana should be bannann in haitian creol");
assert.equal("ayaba", banana.hausa(), "Banana should be ayaba in hausa");
assert.equal("בננה", banana.hebrew(), "Banana should be בננה in hebrew");
assert.equal("केला", banana.hindi(), "Banana should be केला in hindi");
assert.equal("banán", banana.hungarian(), "Banana should be banán in hungarian");
assert.equal("banani", banana.icelandic(), "Banana should be banani in icelandic");
assert.equal("unere", banana.igbo(), "Banana should be unere in igbo");
assert.equal("pisang", banana.indonesian(), "Banana should be pisang in indonesian");
assert.equal("バナナ", banana.japanese(), "Banana should be バナナ in japanese");
assert.equal("ಬಾಳೆ", banana.kannada(), "Banana should be ಬಾಳೆ in kannada");
assert.equal("банан", banana.kazakh(), "Banana should be банан in kazakh");
assert.equal("ចេក", banana.khmer(), "Banana should be ចេក in khmer");
assert.equal("바나나", banana.korean(), "Banana should be 바나나 in korean");