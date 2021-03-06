学习笔记

###动态规划算法的两种形式

动态规划原理

①最优子结构

用动态规划求解最优化问题的第一步就是刻画最优解的结构，如果一个问题的解结构包含其子问题的最优解，就称此问题具有最优子结构性质。因此，某个问题是否适合应用动态规划算法，它是否具有最优子结构性质是一个很好的线索。使用动态规划算法时，用子问题的最优解来构造原问题的最优解。因此必须考查最优解中用到的所有子问题。

②重叠子问题

在斐波拉契数列和钢条切割结构图中，可以看到大量的重叠子问题，比如说在求fib（6）的时候，fib（2）被调用了5次，在求cut（4）的时候cut（0）被调用了4次。如果使用递归算法的时候会反复的求解相同的子问题，不停的调用函数，而不是生成新的子问题。如果递归算法反复求解相同的子问题，就称为具有重叠子问题（overlapping subproblems）性质。在动态规划算法中使用数组来保存子问题的解，这样子问题多次求解的时候可以直接查表不用调用函数递归。

动态规划算法的核心是记住已经求过的解，记住求解的方式有两种
- ①自顶向下的备忘录法 
- ②自底向上。


[CSDN参考链接](https://blog.csdn.net/u013309870/article/details/75193592)

