# Stack
### Steps:
```
npm i 
npm run test
```

### UwU
You have to simulate a Stack Data Structure without using arrays at all. Use the property **top** to keep track of the current index (the top of the stack). You must initialize it as -1 meaning that it doesn't  have any starting items. 
Next, use the property **items** to store all the stack items. You must initialize it as an empty object.
Finally, create the **push**, **pop** and **peek** methods with the following rules:
- Push must only receive a **string** as an argument. If it is not a string, it throws an error saying "**Only strings allowed**"
- Pop must remove the last item and return it. If there's nothing to remove, then it throws an error saying "**No elements to remove**"
- Peek must only return the last item of the stack
