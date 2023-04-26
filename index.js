var input = require('prompt-sync')();
var DESTables = /** @class */ (function () {
    function DESTables() {
        this.PC1 = [
            57, 49, 41, 33, 25, 17, 9,
            1, 58, 50, 42, 34, 26, 18,
            10, 2, 59, 51, 43, 35, 27,
            19, 11, 3, 60, 52, 44, 36,
            63, 55, 47, 39, 31, 23, 15,
            7, 62, 54, 46, 38, 30, 22,
            14, 6, 61, 53, 45, 37, 29,
            21, 13, 5, 28, 20, 12, 4
        ];
        this.PC2 = [
            14, 17, 11, 24, 1, 5,
            3, 28, 15, 6, 21, 10,
            23, 19, 12, 4, 26, 8,
            16, 7, 27, 20, 13, 2,
            41, 52, 31, 37, 47, 55,
            30, 40, 51, 45, 33, 48,
            44, 49, 39, 56, 34, 53,
            46, 42, 50, 36, 29, 32
        ];
        this.IP = [
            58, 50, 42, 34, 26, 18, 10, 2,
            60, 52, 44, 36, 28, 20, 12, 4,
            62, 54, 46, 38, 30, 22, 14, 6,
            64, 56, 48, 40, 32, 24, 16, 8,
            57, 49, 41, 33, 25, 17, 9, 1,
            59, 51, 43, 35, 27, 19, 11, 3,
            61, 53, 45, 37, 29, 21, 13, 5,
            63, 55, 47, 39, 31, 23, 15, 7
        ];
        this.E = [
            32, 1, 2, 3, 4, 5,
            4, 5, 6, 7, 8, 9,
            8, 9, 10, 11, 12, 13,
            12, 13, 14, 15, 16, 17,
            16, 17, 18, 19, 20, 21,
            20, 21, 22, 23, 24, 25,
            24, 25, 26, 27, 28, 29,
            28, 29, 30, 31, 32, 1
        ];
        this.S = [
            [
                [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
                [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
                [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
                [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
            ],
            [
                [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
                [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
                [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
                [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
            ],
            [
                [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
                [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
                [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
                [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
            ],
            [
                [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
                [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
                [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
                [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
            ],
            [
                [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
                [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
                [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
                [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
            ],
            [
                [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
                [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
                [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
                [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
            ],
            [
                [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
                [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
                [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
                [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
            ],
            [
                [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
                [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
                [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
                [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
            ]
        ];
        this.P = [
            16, 7, 20, 21,
            29, 12, 28, 17,
            1, 15, 23, 26,
            5, 18, 31, 10,
            2, 8, 24, 14,
            32, 27, 3, 9,
            19, 13, 30, 6,
            22, 11, 4, 25
        ];
        this.IPn1 = [
            40, 8, 48, 16, 56, 24, 64, 32,
            39, 7, 47, 15, 55, 23, 63, 31,
            38, 6, 46, 14, 54, 22, 62, 30,
            37, 5, 45, 13, 53, 21, 61, 29,
            36, 4, 44, 12, 52, 20, 60, 28,
            35, 3, 43, 11, 51, 19, 59, 27,
            34, 2, 42, 10, 50, 18, 58, 26,
            33, 1, 41, 9, 49, 17, 57, 25
        ];
        this.Shifts = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    }
    return DESTables;
}());
var Program = /** @class */ (function () {
    function Program() {
        this.DES = new DEScipher();
        this.Data = '';
        this.Key = [];
        this.ErrorGatherer = [];
        console.log('This is an implementation of DES Algorythm');
        //utworzenie zmiennych
        //wczytanie danych użytkownika
        var DataInput = input('Enter the message: ');
        var KeyInput = input("Enter your Key or type 'g' to generate one: ");
        console.log("Type the version of the algorythm you wish to use");
        var type = input("'basic' / 'ecb' / 'cbc' : ");
        var executeOperation = input("Type 'e' for encryption / type 'd' for decryption: ");
        //ustalenie klucza i danych
        if (KeyInput == 'g') {
            KeyInput = this.generate();
            console.log('Log: your Key is = ' + KeyInput);
        }
        this.Key = this.bitArray(this.binary(KeyInput));
        this.Data = this.binary(DataInput);
        switch (executeOperation) {
            case 'e':
                this.DES.Encrypt = true;
                break;
            case 'd':
                this.DES.Encrypt = false;
                break;
            default: this.ErrorGatherer.push('The operation was not selected!');
        }
        this.ErrorGatherer.length == 0 ? null : new Error('found errors: ' + this.ErrorGatherer.join(' '));
        switch (type) {
            case 'basic':
                this.basic();
                break;
            case 'ecb':
                console.log('\nfor the key:' + KeyInput + '\ninput            | cipher\n');
                this.ecb(DataInput);
                break;
            case 'cbc':
                this.cbc();
                break;
            default: ;
        }
    }
    Program.prototype.generate = function () {
        var vector = '';
        for (var indexer = 0; indexer < 16; indexer++) {
            vector += Math.floor(Math.random() * 16).toString(16);
        }
        return vector;
    };
    Program.prototype.basic = function () {
        this.DES.Key = this.Key;
        this.DES.Data = this.bitArray(this.Data);
        console.log(this.hex(this.DES.algorithm().join('')));
    };
    Program.prototype.ecb = function (DataInput) {
        var chunk;
        var chunkBgn;
        var chunkEnd;
        var chunkCount;
        var dataChunks = [];
        chunkCount = Math.abs(this.Data.length / 64);
        for (var indexer = 0; indexer < chunkCount; indexer++) {
            chunkBgn = indexer * 64;
            chunkEnd = chunkBgn + 64;
            chunk = this.Data.slice(chunkBgn, chunkEnd).padEnd(64, '0');
            dataChunks[indexer] = this.bitArray(chunk);
        }
        this.DES.Key = this.Key;
        for (var chunkIndex = 0; chunkIndex < chunkCount; chunkIndex++) {
            chunkBgn = chunkIndex * 16;
            chunkEnd = chunkBgn + 16;
            this.DES.Data = dataChunks[chunkIndex];
            console.log(DataInput.slice(chunkBgn, chunkEnd).padEnd(18, ' ') + this.hex(this.DES.algorithm().join('')));
        }
    };
    Program.prototype.cbc = function () {
        var initializationVector;
        var dataToXOR;
        var chunk;
        var chunkBgn;
        var chunkEnd;
        var chunkCount;
        var dataChunks = [];
        chunkCount = Math.abs(this.Data.length / 64);
        for (var indexer = 0; indexer < chunkCount; indexer++) {
            chunkBgn = indexer * 64;
            chunkEnd = chunkBgn + 64;
            chunk = this.Data.slice(chunkBgn, chunkEnd).padEnd(64, '0');
            dataChunks[indexer] = this.bitArray(chunk);
        }
        switch (this.DES.Encrypt) {
            case true:
                initializationVector = this.generate();
                console.log("initialization vector: " + initializationVector);
                dataToXOR = this.bitArray(this.binary(initializationVector));
                this.DES.Key = this.Key;
                for (var chunkIndex = 0; chunkIndex < chunkCount; chunkIndex++) {
                    chunkBgn = chunkIndex * 16;
                    chunkEnd = chunkBgn + 16;
                    this.DES.Data = this.operationXOR(dataChunks[chunkIndex], dataToXOR, 64);
                    dataToXOR = this.DES.algorithm();
                    console.log(this.hex(dataToXOR.join('')));
                }
                break;
            case false:
                initializationVector = input("Enter initialization vector: ");
                dataToXOR = this.bitArray(this.binary(initializationVector));
                this.DES.Key = this.Key;
                for (var chunkIndex = 0; chunkIndex < chunkCount; chunkIndex++) {
                    chunkBgn = chunkIndex * 16;
                    chunkEnd = chunkBgn + 16;
                    this.DES.Data = dataChunks[chunkIndex];
                    console.log(this.hex(this.operationXOR(this.DES.algorithm(), dataToXOR, 64).join('')));
                    dataToXOR = dataChunks[chunkIndex];
                }
                break;
        }
    };
    Program.prototype.bitArray = function (binary) {
        return Array.from(binary, function (x) { return x; });
    };
    Program.prototype.binary = function (hex) {
        return (Array.from(hex)).map(function (x) { return (parseInt(x, 16).toString(2)).padStart(4, '0'); }).join('');
    };
    Program.prototype.hex = function (binary) {
        var hex = '';
        var chunkBgn;
        var chunkEnd;
        for (var bitIndex = 0; bitIndex < binary.length / 4; bitIndex++) {
            chunkBgn = bitIndex * 4;
            chunkEnd = chunkBgn + 4;
            hex += parseInt(binary.slice(chunkBgn, chunkEnd), 2).toString(16);
        }
        return hex;
    };
    Program.prototype.operationXOR = function (xValues, yValues, bitCount) {
        var xorResult = '';
        for (var bitIndex = 0; bitIndex < bitCount; bitIndex++) {
            xorResult += (xValues[bitIndex] != yValues[bitIndex] ? 1 : 0);
        }
        return this.bitArray(xorResult);
    };
    return Program;
}());
var DEScipher = /** @class */ (function () {
    function DEScipher() {
        this.Data = [];
        this.Key = [];
        this.KeyArray = [];
        this.HalvedData = [];
        this.HalvedDataBuffer = [];
    }
    //ciało algorytmu
    DEScipher.prototype.algorithm = function () {
        //permutacja początkowa
        var permutatedData = this.permutation(this.Data, DEScipher.Tables.IP);
        //rozdzielenie bloku wejściowego na dwie części, lewą [0] i prawą [1]
        this.HalvedData = [permutatedData.slice(0, 32), permutatedData.slice(32, 64)];
        //wykonanie funkcji Feistela
        this.feistel();
        //połączenie prawej i lewej części bloku w odwrotnej kolejności - lewa jako prawa i vice versa
        var modifiedData = this.HalvedData[1].concat(this.HalvedData[0]);
        //permutacja końcowa
        permutatedData = this.permutation(modifiedData, DEScipher.Tables.IPn1);
        //Przetłumaczenie wartości z systemu dwójkowego na szesnastkowy
        return permutatedData;
    };
    //funkcje dla algorytmu
    DEScipher.prototype.feistel = function () {
        //wykorzystywane zmienne
        var permutatedHalf;
        var key;
        var xorResult;
        var boxResult;
        //przygotowanie podkluczy
        this.prepareKeys();
        for (var feistelIndex = 0; feistelIndex < 16; feistelIndex++) {
            //zapisanie prawej połowy w buforze
            this.HalvedDataBuffer = this.HalvedData[1];
            //rozszerzenie prawej połowy do 48 bitów, korzystając z permutacji
            permutatedHalf = this.permutation(this.HalvedData[1], DEScipher.Tables.E);
            //wybór klucza
            key = this.KeyArray[feistelIndex];
            //wykonanie operacji XOR między częścią prawą a wybranym kluczem
            xorResult = this.operationXOR(permutatedHalf, key, 48);
            //uzyskanie wartości z bloków S
            boxResult = this.sBoxValuesGet(xorResult);
            //permutacja wartości z bloków S
            permutatedHalf = this.permutation(boxResult, DEScipher.Tables.P);
            //wykonanie operacji XOR między zmodyfikowaną prawą połową a lewą połową bloku
            xorResult = this.operationXOR(permutatedHalf, this.HalvedData[0], 32);
            //przypisanie wyniku przekształceń jako nowej prawej połowy
            this.HalvedData[1] = this.bitArray(xorResult);
            //nieprzekształcona częśc prawa staje się nową częścią lewą
            this.HalvedData[0] = this.HalvedDataBuffer;
        }
    };
    DEScipher.prototype.prepareKeys = function () {
        //wykorzystywane zmienne
        var permutatedKey;
        var halvedKey;
        var concatenatedKey;
        var shiftsCount;
        //permutacja początkowa klucza
        permutatedKey = this.permutation(this.Key, DEScipher.Tables.PC1);
        //rozdzielenie klucza na dwie 28-bitowe połowy
        halvedKey = [permutatedKey.slice(0, 28), permutatedKey.slice(28, 56)];
        //następnie, by utworzyć 16 podkluczy:
        for (var keyIndex = 0; keyIndex < 16; keyIndex++) {
            //przesunięcie określonej ilości bitów klucza
            shiftsCount = DEScipher.Tables.Shifts[keyIndex];
            for (var shiftIndex = 0; shiftIndex < shiftsCount; shiftIndex++) {
                halvedKey[0].push(halvedKey[0].shift());
                halvedKey[1].push(halvedKey[1].shift());
            }
            //utworzenie podklucza z dwóch połówek
            concatenatedKey = halvedKey[0].concat(halvedKey[1]);
            //ponowna permutacja klucza
            permutatedKey = this.permutation(concatenatedKey, DEScipher.Tables.PC2);
            //zapisanie klucza w tablicy podkluczy
            this.KeyArray[keyIndex] = permutatedKey;
        }
        //zmiana kolejności kluczy w przypadku deszyfrowania
        this.mode();
    };
    DEScipher.prototype.sBoxValuesGet = function (modifiedData) {
        //wykorzystywane zmienne
        var boxResult = [];
        var boxValue;
        var row;
        var column;
        var bitIndex;
        for (var boxIndex = 0; boxIndex < 8; boxIndex++) {
            //określenie grupy bitów
            bitIndex = boxIndex * 6;
            //wyznaczenie adresu wartości w określonym bloku S
            row = parseInt(modifiedData[bitIndex].concat(modifiedData[bitIndex + 5]), 2);
            column = parseInt(modifiedData.slice(bitIndex + 1, bitIndex + 5), 2);
            //pobranie wartości
            boxValue = DEScipher.Tables.S[boxIndex][row][column].toString(2).padStart(4, '0');
            //dołączenie jej do zbioru pobranych wartości
            boxResult = boxResult.concat(this.bitArray(boxValue));
        }
        return boxResult;
    };
    //funkcje pomocnicze
    DEScipher.prototype.permutation = function (values, table) {
        var changedArray = [];
        table.forEach(function (index) {
            changedArray.push(values[index - 1]);
        });
        return changedArray;
    };
    DEScipher.prototype.mode = function () {
        this.Encrypt ? this.KeyArray : this.KeyArray.reverse();
    };
    DEScipher.prototype.operationXOR = function (xValues, yValues, bitCount) {
        var xorResult = '';
        for (var bitIndex = 0; bitIndex < bitCount; bitIndex++) {
            xorResult += (xValues[bitIndex] != yValues[bitIndex] ? 1 : 0);
        }
        return xorResult;
    };
    DEScipher.prototype.bitArray = function (binary) {
        return Array.from(binary, function (x) { return x; });
    };
    //pola pomocnicze
    DEScipher.Tables = new DESTables();
    return DEScipher;
}());
var program = new Program();
