function arrayDiff(a, b) {
   return a.filter(a_el => b.every(b_el => b_el !== a_el))
}