function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 解法一 递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2
    }
}

/**
 * 解法二 循环
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode();
    let move = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            move.next = l1;
            l1 = l1.next;
        } else {
            move.next = l2;
            l2 = l2.next;
        }
        move = move.next
    }
    move.next = l1 || l2;
    return dummy.next;
}