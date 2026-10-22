// Kamus terjemahan pesan error TypeScript (Inggris -> Indonesia).
// {0}, {1}, {2} = bagian yang berubah-ubah (nama variabel, tipe, dll).
// Urutan penting: pola yang lebih spesifik harus di atas pola yang umum.
const entries = [
  // --- nama tidak ditemukan ---
  ["Cannot find name '{0}'. Did you mean '{1}'?", "Tidak dapat menemukan nama '{0}'. Maksud Anda '{1}'?"],
  ["Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.", "Tidak dapat menemukan nama '{0}'. Perlu install type definitions untuk node? Coba `npm i --save-dev @types/node` lalu tambahkan 'node' ke field types di tsconfig."],
  ["Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.", "Tidak dapat menemukan nama '{0}'. Perlu install type definitions untuk node? Coba `npm i --save-dev @types/node`."],
  ["Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.", "Tidak dapat menemukan nama '{0}'. Perlu mengubah target library? Coba ubah opsi 'lib' di compiler agar menyertakan 'dom'."],
  ["Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to '{1}' or later.", "Tidak dapat menemukan nama '{0}'. Perlu mengubah target library? Coba ubah opsi 'lib' di compiler menjadi '{1}' atau lebih baru."],
  ["Cannot find name '{0}'.", "Tidak dapat menemukan nama '{0}' (belum dideklarasikan / salah ketik)."],
  ["Cannot find module '{0}' or its corresponding type declarations.", "Tidak dapat menemukan modul '{0}' atau type declaration-nya."],
  ["Cannot find namespace '{0}'.", "Tidak dapat menemukan namespace '{0}'."],
  ["Module '{0}' has no exported member '{1}'. Did you mean '{2}'?", "Modul '{0}' tidak punya member '{1}' yang diekspor. Maksud Anda '{2}'?"],
  ["Module '{0}' has no exported member '{1}'.", "Modul '{0}' tidak punya member '{1}' yang diekspor."],
  ["'{0}' is declared but its value is never read.", "'{0}' dideklarasikan tetapi nilainya tidak pernah dibaca."],
  ["'{0}' is declared but never used.", "'{0}' dideklarasikan tetapi tidak pernah dipakai."],
  ["All imports in import declaration are unused.", "Semua import pada deklarasi import tidak dipakai."],

  // --- property ---
  ["Property '{0}' does not exist on type '{1}'. Did you mean '{2}'?", "Property '{0}' tidak ada pada tipe '{1}'. Maksud Anda '{2}'?"],
  ["Property '{0}' does not exist on type '{1}'.", "Property '{0}' tidak ada pada tipe '{1}'."],
  ["Property '{0}' has no initializer and is not definitely assigned in the constructor.", "Property '{0}' tidak punya nilai awal dan belum pasti diisi di constructor."],
  ["Property '{0}' is used before being assigned.", "Property '{0}' dipakai sebelum diisi nilainya."],
  ["Property '{0}' is missing in type '{1}' but required in type '{2}'.", "Property '{0}' tidak ada pada tipe '{1}' padahal wajib ada pada tipe '{2}'."],
  ["Property '{0}' is private and only accessible within class '{1}'.", "Property '{0}' bersifat private dan hanya bisa diakses di dalam class '{1}'."],
  ["Property '{0}' is protected and only accessible within class '{1}' and its subclasses.", "Property '{0}' bersifat protected dan hanya bisa diakses di dalam class '{1}' dan turunannya."],
  ["Property '{0}' is optional in type '{1}' but required in type '{2}'.", "Property '{0}' opsional pada tipe '{1}' tetapi wajib pada tipe '{2}'."],
  ["Types of property '{0}' are incompatible.", "Tipe property '{0}' tidak cocok."],
  ["Object literal may only specify known properties, and '{0}' does not exist in type '{1}'.", "Object literal hanya boleh berisi property yang dikenal, dan '{0}' tidak ada pada tipe '{1}'."],
  ["Cannot assign to '{0}' because it is a constant.", "Tidak bisa mengisi '{0}' karena merupakan konstanta (const)."],
  ["Cannot assign to '{0}' because it is a read-only property.", "Tidak bisa mengisi '{0}' karena property read-only."],
  ["Cannot assign to '{0}' because it is not a variable.", "Tidak bisa mengisi '{0}' karena bukan variabel."],

  // --- tipe tidak cocok ---
  ["Type '{0}' is not assignable to type '{1}'. Did you mean '{2}'?", "Tipe '{0}' tidak bisa dimasukkan ke tipe '{1}'. Maksud Anda '{2}'?"],
  ["Type '{0}' is not assignable to type '{1}'.", "Tipe '{0}' tidak bisa dimasukkan ke tipe '{1}'."],
  ["Argument of type '{0}' is not assignable to parameter of type '{1}'.", "Argumen bertipe '{0}' tidak bisa dimasukkan ke parameter bertipe '{1}'."],
  ["Type '{0}' is missing the following properties from type '{1}': {2}", "Tipe '{0}' kekurangan property berikut dari tipe '{1}': {2}"],
  ["Type '{0}' is missing the following properties from type '{1}': {2}, and {3} more.", "Tipe '{0}' kekurangan property berikut dari tipe '{1}': {2}, dan {3} lagi."],
  ["Type '{0}' has no properties in common with type '{1}'.", "Tipe '{0}' tidak punya property yang sama dengan tipe '{1}'."],
  ["Type '{0}' is not comparable to type '{1}'.", "Tipe '{0}' tidak bisa dibandingkan dengan tipe '{1}'."],
  ["Type '{0}' cannot be used as an index type.", "Tipe '{0}' tidak bisa dipakai sebagai tipe index."],
  ["Type '{0}' is not an array type.", "Tipe '{0}' bukan tipe array."],
  ["Type '{0}' must have a '[Symbol.iterator]()' method that returns an iterator.", "Tipe '{0}' harus punya method '[Symbol.iterator]()' yang mengembalikan iterator."],
  ["Type '{0}' does not satisfy the constraint '{1}'.", "Tipe '{0}' tidak memenuhi batasan '{1}'."],
  ["Type '{0}' is not generic.", "Tipe '{0}' bukan generic."],
  ["Type '{0}' recursively references itself as a base type.", "Tipe '{0}' mereferensikan dirinya sendiri sebagai base type."],
  ["Type '{0}' is missing the following properties from type '{1}'.", "Tipe '{0}' kekurangan property dari tipe '{1}'."],
  ["Generic type '{0}' requires {1} type argument(s).", "Generic type '{0}' membutuhkan {1} type argument."],
  ["Generic type '{0}' requires between {1} and {2} type arguments.", "Generic type '{0}' membutuhkan {1} sampai {2} type argument."],
  ["The expected type comes from property '{0}' which is declared here on type '{1}'", "Tipe yang diharapkan berasal dari property '{0}' yang dideklarasikan di tipe '{1}'"],
  ["The expected type comes from the return type of this signature.", "Tipe yang diharapkan berasal dari return type signature ini."],

  // --- null / undefined / unknown ---
  ["Object is possibly 'undefined'.", "Object mungkin bernilai 'undefined'."],
  ["Object is possibly 'null'.", "Object mungkin bernilai 'null'."],
  ["Object is possibly 'null' or 'undefined'.", "Object mungkin bernilai 'null' atau 'undefined'."],
  ["'{0}' is possibly 'undefined'.", "'{0}' mungkin bernilai 'undefined'."],
  ["'{0}' is possibly 'null'.", "'{0}' mungkin bernilai 'null'."],
  ["'{0}' is possibly 'null' or 'undefined'.", "'{0}' mungkin bernilai 'null' atau 'undefined'."],
  ["Object is of type 'unknown'.", "Object bertipe 'unknown'."],
  ["'{0}' is of type 'unknown'.", "'{0}' bertipe 'unknown'."],
  ["Variable '{0}' is used before being assigned.", "Variabel '{0}' dipakai sebelum diisi nilainya."],
  ["Block-scoped variable '{0}' used before its declaration.", "Variabel block-scoped '{0}' dipakai sebelum dideklarasikan."],
  ["Cannot redeclare block-scoped variable '{0}'.", "Tidak bisa mendeklarasikan ulang variabel block-scoped '{0}'."],
  ["Duplicate identifier '{0}'.", "Identifier '{0}' duplikat (sudah dipakai)."],
  ["Duplicate function implementation.", "Implementasi function duplikat."],
  ["Subsequent variable declarations must have the same type. Variable '{0}' must be of type '{1}', but here has type '{2}'.", "Deklarasi variabel berikutnya harus bertipe sama. Variabel '{0}' harus bertipe '{1}', tetapi di sini bertipe '{2}'."],

  // --- implicit any ---
  ["Parameter '{0}' implicitly has an '{1}' type.", "Parameter '{0}' otomatis bertipe '{1}' (tulis tipenya secara eksplisit)."],
  ["Variable '{0}' implicitly has an '{1}' type.", "Variabel '{0}' otomatis bertipe '{1}' (tulis tipenya secara eksplisit)."],
  ["Member '{0}' implicitly has an '{1}' type.", "Member '{0}' otomatis bertipe '{1}' (tulis tipenya secara eksplisit)."],
  ["Binding element '{0}' implicitly has an '{1}' type.", "Binding element '{0}' otomatis bertipe '{1}' (tulis tipenya secara eksplisit)."],
  ["'{0}', which lacks return-type annotation, implicitly has an '{1}' return type.", "'{0}' tidak punya anotasi return type sehingga otomatis mengembalikan tipe '{1}'."],
  ["Element implicitly has an 'any' type because expression of type '{0}' can't be used to index type '{1}'.", "Element otomatis bertipe 'any' karena ekspresi bertipe '{0}' tidak bisa dipakai sebagai index pada tipe '{1}'."],
  ["Element implicitly has an 'any' type because type '{0}' has no index signature.", "Element otomatis bertipe 'any' karena tipe '{0}' tidak punya index signature."],
  ["Could not find a declaration file for module '{0}'. '{1}' implicitly has an 'any' type.", "Tidak menemukan file deklarasi untuk modul '{0}'. '{1}' otomatis bertipe 'any'."],

  // --- function / call ---
  ["Expected {0} arguments, but got {1}.", "Diharapkan {0} argumen, tetapi diberikan {1}."],
  ["Expected at least {0} arguments, but got {1}.", "Diharapkan minimal {0} argumen, tetapi diberikan {1}."],
  ["Expected {0}-{1} arguments, but got {2}.", "Diharapkan {0}-{1} argumen, tetapi diberikan {2}."],
  ["Expected {0} type arguments, but got {1}.", "Diharapkan {0} type argument, tetapi diberikan {1}."],
  ["No overload matches this call.", "Tidak ada overload yang cocok dengan pemanggilan ini."],
  ["Overload {0} of {1}, '{2}', gave the following error.", "Overload {0} dari {1}, '{2}', menghasilkan error berikut."],
  ["This expression is not callable.", "Ekspresi ini tidak bisa dipanggil sebagai function."],
  ["This expression is not constructable.", "Ekspresi ini tidak bisa dibuat dengan 'new'."],
  ["Each member of the union type '{0}' has signatures, but none of those signatures are compatible with each other.", "Setiap anggota union type '{0}' punya signature, tetapi tidak ada yang kompatibel satu sama lain."],
  ["A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.", "Function yang tipenya bukan 'undefined', 'void', atau 'any' wajib mengembalikan nilai (return)."],
  ["Function lacks ending return statement and return type does not include 'undefined'.", "Function tidak punya return di akhir dan return type-nya tidak mencakup 'undefined'."],
  ["Not all code paths return a value.", "Tidak semua alur kode mengembalikan nilai."],
  ["A 'return' statement can only be used within a function body.", "Statement 'return' hanya bisa dipakai di dalam function."],
  ["A required parameter cannot follow an optional parameter.", "Parameter wajib tidak boleh berada setelah parameter opsional."],
  ["Unreachable code detected.", "Terdeteksi kode yang tidak akan pernah dijalankan."],
  ["The 'this' context of type '{0}' is not assignable to method's 'this' of type '{1}'.", "Konteks 'this' bertipe '{0}' tidak cocok dengan 'this' method yang bertipe '{1}'."],
  ["'this' implicitly has type 'any' because it does not have a type annotation.", "'this' otomatis bertipe 'any' karena tidak punya anotasi tipe."],

  // --- operator ---
  ["Operator '{0}' cannot be applied to types '{1}' and '{2}'.", "Operator '{0}' tidak bisa dipakai pada tipe '{1}' dan '{2}'."],
  ["This comparison appears to be unintentional because the types '{0}' and '{1}' have no overlap.", "Perbandingan ini sepertinya tidak disengaja karena tipe '{0}' dan '{1}' tidak beririsan."],
  ["The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.", "Sisi kiri operasi aritmatika harus bertipe 'any', 'number', 'bigint', atau enum."],
  ["The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.", "Sisi kanan operasi aritmatika harus bertipe 'any', 'number', 'bigint', atau enum."],
  ["The left-hand side of an assignment expression must be a variable or a property access.", "Sisi kiri assignment harus berupa variabel atau akses property."],
  ["An expression of type 'void' cannot be tested for truthiness.", "Ekspresi bertipe 'void' tidak bisa dicek true/false."],

  // --- class / interface ---
  ["Class '{0}' incorrectly implements interface '{1}'.", "Class '{0}' salah dalam mengimplementasikan interface '{1}'."],
  ["Class '{0}' incorrectly extends base class '{1}'.", "Class '{0}' salah dalam menurunkan base class '{1}'."],
  ["Non-abstract class '{0}' does not implement inherited abstract member '{1}' from class '{2}'.", "Class non-abstract '{0}' belum mengimplementasikan member abstract '{1}' dari class '{2}'."],
  ["Cannot create an instance of an abstract class.", "Tidak bisa membuat instance dari abstract class."],
  ["Constructors for derived classes must contain a 'super' call.", "Constructor class turunan wajib memanggil 'super'."],
  ["'super' must be called before accessing 'this' in the constructor of a derived class.", "'super' harus dipanggil sebelum mengakses 'this' di constructor class turunan."],
  ["Class '{0}' used before its declaration.", "Class '{0}' dipakai sebelum dideklarasikan."],
  ["Interface '{0}' incorrectly extends interface '{1}'.", "Interface '{0}' salah dalam menurunkan interface '{1}'."],
  ["'{0}' only refers to a type, but is being used as a value here.", "'{0}' hanya merujuk ke tipe, tetapi dipakai sebagai nilai di sini."],
  ["'{0}' refers to a value, but is being used as a type here. Did you mean 'typeof {0}'?", "'{0}' merujuk ke nilai, tetapi dipakai sebagai tipe di sini. Maksud Anda 'typeof {0}'?"],
  ["Accessors must both be abstract or non-abstract.", "Getter dan setter harus sama-sama abstract atau non-abstract."],
  ["'get' and 'set' accessor must have the same type.", "Getter dan setter harus bertipe sama."],
  ["A 'set' accessor cannot have a return type annotation.", "Setter tidak boleh punya anotasi return type."],
  ["'{0}' is declared but its value is never read.", "'{0}' dideklarasikan tetapi nilainya tidak pernah dibaca."],

  // --- sintaks ---
  ["'{0}' expected.", "Diharapkan '{0}'."],
  ["Expression expected.", "Diharapkan sebuah ekspresi."],
  ["Declaration or statement expected.", "Diharapkan deklarasi atau statement."],
  ["Identifier expected.", "Diharapkan sebuah identifier (nama)."],
  ["Identifier expected. '{0}' is a reserved word that cannot be used here.", "Diharapkan identifier. '{0}' adalah kata cadangan yang tidak boleh dipakai di sini."],
  ["Unterminated string literal.", "String belum ditutup (kurang tanda kutip penutup)."],
  ["Unterminated template literal.", "Template literal belum ditutup (kurang tanda ` penutup)."],
  ["Unexpected token. A constructor, method, accessor, or property was expected.", "Token tidak terduga. Diharapkan constructor, method, accessor, atau property."],
  ["Unexpected token. Did you mean `{'}'}` or `&rbrace;`?", "Token tidak terduga. Maksud Anda `{'}'}` atau `&rbrace;`?"],
  ["Unexpected keyword or identifier.", "Keyword atau identifier tidak terduga."],
  ["Property or signature expected.", "Diharapkan property atau signature."],
  ["Type expected.", "Diharapkan sebuah tipe."],
  ["Argument expression expected.", "Diharapkan ekspresi argumen."],
  ["Variable declaration expected.", "Diharapkan deklarasi variabel."],
  ["Parameter declaration expected.", "Diharapkan deklarasi parameter."],
  ["Invalid character.", "Karakter tidak valid."],
  ["'}' expected.", "Diharapkan '}'."],
  ["'const' declarations must be initialized.", "Deklarasi 'const' wajib langsung diberi nilai."],
  ["A 'const' initializer in an ambient context must be a string or numeric literal.", "Nilai awal 'const' pada ambient context harus string atau angka literal."],
  ["Unused '@ts-expect-error' directive.", "Direktif '@ts-expect-error' tidak terpakai (tidak ada error di bawahnya)."],
  ["File '{0}' is not a module.", "File '{0}' bukan sebuah modul."],
  ["Cannot use 'new' with an expression whose type lacks a call or construct signature.", "Tidak bisa memakai 'new' pada ekspresi yang tipenya tidak punya call atau construct signature."],
  ["Cannot use import statement outside a module", "Tidak bisa memakai import di luar modul"],
  ["An import path cannot end with a '{0}' extension. Consider importing '{1}' instead.", "Path import tidak boleh diakhiri ekstensi '{0}'. Coba import '{1}' saja."],
  ["Import declaration conflicts with local declaration of '{0}'.", "Deklarasi import bentrok dengan deklarasi lokal '{0}'."],
  ["'await' expressions are only allowed within async functions and at the top levels of modules.", "'await' hanya boleh dipakai di dalam function async atau di level atas modul."],
  ["The return type of an async function or method must be the global Promise<T> type.", "Return type function async harus bertipe Promise<T>."],
  ["'{0}' is specified more than once, so this usage will be overwritten.", "'{0}' ditulis lebih dari sekali, jadi yang ini akan tertimpa."],
  ["'{0}' can only be used in TypeScript files.", "'{0}' hanya bisa dipakai di file TypeScript."],
  ["Type annotations can only be used in TypeScript files.", "Anotasi tipe hanya bisa dipakai di file TypeScript."],
  ["Left side of comma operator is unused and has no side effects.", "Sisi kiri operator koma tidak dipakai dan tidak berefek apa pun."],
  ["Enum member must have initializer.", "Member enum wajib punya nilai awal."],
  ["A rest parameter must be of an array type.", "Rest parameter harus bertipe array."],
  ["Rest parameter '{0}' implicitly has an 'any[]' type.", "Rest parameter '{0}' otomatis bertipe 'any[]'."],
  ["Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern.", "Maksud Anda memakai ':'? Tanda '=' hanya boleh setelah nama property pada destructuring."],
  ["Did you forget to use 'await'?", "Apakah Anda lupa memakai 'await'?"],
  ["Did you mean to call this expression?", "Maksud Anda memanggil ekspresi ini sebagai function (tambah tanda kurung)?"],
  ["Cannot invoke an object which is possibly 'undefined'.", "Tidak bisa memanggil object yang mungkin bernilai 'undefined'."],
  ["Cannot invoke an object which is possibly 'null'.", "Tidak bisa memanggil object yang mungkin bernilai 'null'."],
  ["Cannot find a tsconfig.json file at the specified directory: '{0}'.", "Tidak menemukan file tsconfig.json di folder: '{0}'."],
  ["Spread types may only be created from object types.", "Spread hanya bisa dibuat dari tipe object."],
  ["Argument of type '{0}' is not assignable to parameter of type '{1}'.", "Argumen bertipe '{0}' tidak bisa dimasukkan ke parameter bertipe '{1}'."]
];

entries.push(...require("./kamus-tambahan"));

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Ubah template jadi { regex, to }
const rules = entries.map(([en, id]) => {
  const parts = en.split(/(\{\d+\})/);
  let source = "";
  for (const part of parts) {
    const m = /^\{(\d+)\}$/.exec(part);
    source += m ? "(.+?)" : escapeRegex(part);
  }
  return { regex: new RegExp("^" + source + "$", "s"), to: id };
});

function translateLine(line) {
  const indent = /^\s*/.exec(line)[0];
  const text = line.slice(indent.length);
  for (const { regex, to } of rules) {
    const m = regex.exec(text);
    if (m) {
      return indent + to.replace(/\{(\d+)\}/g, (_, i) => m[Number(i) + 1] ?? "");
    }
  }
  return null;
}

// Terjemahkan seluruh pesan (bisa multi-baris). Mengembalikan null jika tidak ada yang cocok.
function translate(message) {
  let any = false;
  const out = message.split("\n").map((line) => {
    const t = translateLine(line);
    if (t === null) return line;
    any = true;
    return t;
  });
  return any ? out.join("\n") : null;
}

module.exports = { translate };
