# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Members: Nathan Scott

[expose.html](https://ncscott95.github.io/Lab5_Starter/expose.html)

[explore.html](https://ncscott95.github.io/Lab5_Starter/explore.html)

## Explore Pt. 3 Answers
1. No. While the "message" feature is obviously important to test, the feature is too large to be contained in a unit test. This feature requires a variety of moving parts, including the typing UI, possibly saving the message in history, and sending it across a network. Trying to test the whole feature at once is slow, and making changes anywhere in the process could have impacts on other features. This feature is better suited for end-to-end testing. 
2. Yes. The "max message length" feature is a small, atomic functionality that can be quickly tested and verified. Making changes to this feature likely won't effect other aspects of the application. 