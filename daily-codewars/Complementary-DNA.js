function DNAStrand(dna){
    return dna.split('').map(el => 'A' === el ? 'T' : 'T' === el ? 'A' : 'G' === el ? 'C' : 'C' === el ? 'G' : '' ).join('')
}

console.log(DNAStrand("AAAA")) //,"TTTT","String AAAA is"
console.log(DNAStrand("ATTGC")) //,"TAACG","String ATTGC is"
console.log(DNAStrand("GTAT")) //,"CATA","String GTAT is"