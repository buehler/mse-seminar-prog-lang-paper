// Basic add 1 function and the absolute zero.
// This is used for printing real values.
let addOne = fun x -> x + 1
let zero = 0

let c0 = fun s -> fun z -> z
let c1 = fun s -> fun z -> s(z)
let c2 = fun s -> fun z -> s(s(z))

let succ = fun n -> fun s -> fun z -> s(n(s)(z))

printfn "Result of c0: %A" (c0(addOne)(zero))
printfn "Result of c1: %A" (c1(addOne)(zero))
printfn "Result of c2: %A" (c2(addOne)(zero))

printfn "Result of succ(c0): %A" (succ(c0)(addOne)(zero))
printfn "Result of succ(c2): %A" (succ(c2)(addOne)(zero))
