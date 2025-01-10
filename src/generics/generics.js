// Generics
//Echo Command
//아래와 같이 각 타입별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다.
function identiy(arg) {
    return arg;
}
function identiy2(arg) {
    return arg;
}
function identiy3(arg) {
    return arg;
}
//..
//잘못하여 any타입을 사용한다면, 타입 검증의 목적을 달성하기 어려움
// function identiy(arg: any) :any {
// //...
// arg = "10";
// //
//     return arg;
// }
var arg = 10;
identiy(arg);
//비효율적인 코드 해결 방법
//User Generics
function identityWithGenerics(arg) {
    return arg;
}
//use Generics general version "T"
function identityWithGenerics2(arg) {
    return arg;
}
//use Generics multiple version "T" + "U"
function identityWithGenerics3(arg1, arg2) {
    return [arg1, arg2];
}
//Type이라는 키워드가 해당 함수 내 동일한 키워들을 통일시킴
var inputNum = "10";
var result = identityWithGenerics(inputNum);
console.log("type of input: " + typeof inputNum);
console.log("type of result: " + typeof result);
console.log("resutl of using generics: " + result);
var result2 = identityWithGenerics3(20, "Hello");
console.log(result2);
