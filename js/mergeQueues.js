const mergeQueues = (q1, q2) => {
   const q3 = new Queue();
   while (q1.size || q2.size) {
     if (q1.size) q3.enQueue(q1.deQueue());
     if (q2.size) q3.enQueue(q2.deQueue());
   }
   return q3;
 };
 
 const queue1 = new Queue(11, 12, 13, 14, 15);
 const queue2 = new Queue(21, 22, 23, 24, 25, 26, 27, 28);
 
 console.log(mergeQueues(queue1, queue2));