var total_angkot = 10;
var no_angkot = 1;
var total_beroperasi = 6;
for (no_angkot <= total_angkot; no_angkot <= total_angkot; no_angkot++) {
  if (no_angkot <= total_beroperasi && no_angkot !== 5) {
    console.log("Angkot No " + no_angkot + " beroperasi dengan baik");
  } else if (no_angkot === 8 || no_angkot === 10 || no_angkot === 5) {
    console.log("Angkot No " + no_angkot + " sedang lembur");
  } else {
    console.log("Angkot No " + no_angkot + " beroperasi dengan tidak baik");
  }
}
