export const questions = [
 ['Java','Easy','Which keyword creates a subclass in Java?',['extends','implements','imports','inherits'],0,'extends establishes class inheritance; implements is used for interfaces.'],
 ['Java','Easy','Which type stores true or false?',['int','String','boolean','char'],2,'The primitive boolean type has two values: true and false.'],
 ['Java','Easy','Which collection prevents duplicate elements?',['List','Set','ArrayList','Queue'],1,'A Set does not contain duplicate elements.'],
 ['Java','Challenge','What does String.equals() compare?',['Object addresses','String contents','Hash codes only','String capacities'],1,'String overrides equals() to compare character sequences. == compares references.'],
 ['Java','Challenge','Which operation is typically O(1) on average for a HashMap?',['Sorting keys','Searching every value','Getting a value by key','Printing all entries'],2,'With well-distributed hashes, key lookup takes expected constant time.'],
 ['Java','Challenge','Which keyword prevents a method from being overridden?',['static','final','transient','volatile'],1,'A final instance method cannot be overridden by a subclass.'],
 ['Web','Easy','Which HTML element creates a hyperlink?',['<p>','<a>','<div>','<span>'],1,'The anchor element <a> uses href to identify the destination.'],
 ['Web','Easy','Which CSS property changes text colour?',['font-style','background','color','display'],2,'color controls the foreground colour of text.'],
 ['Web','Easy','Which HTTP method normally retrieves a resource?',['GET','POST','PATCH','DELETE'],0,'GET requests a representation of a resource.'],
 ['Web','Challenge','Which HTTP status represents a missing resource?',['200','201','404','500'],2,'404 Not Found means the server cannot find the requested resource.'],
 ['Web','Challenge','What does a React key help identify?',['The database password','An item across list renders','The CSS colour','The browser version'],1,'Stable keys help React match list items between renders.'],
 ['Web','Challenge','Which browser storage normally survives closing and reopening the browser?',['A local variable','sessionStorage','localStorage','A function parameter'],2,'localStorage persists across browser sessions unless cleared or restricted.'],
 ['CS','Easy','Which structure follows FIFO order?',['Stack','Queue','Tree','Set'],1,'A queue removes items in first-in, first-out order.'],
 ['CS','Easy','How many bits are in one byte?',['2','4','8','16'],2,'One byte consists of eight bits.'],
 ['CS','Easy','Which SQL command retrieves rows?',['SELECT','INSERT','DROP','UPDATE'],0,'SELECT queries data from database tables.'],
 ['CS','Challenge','What must be true for standard binary search on an array?',['Values are unique','The array is sorted','Its length is even','All values are positive'],1,'Binary search uses sorted order to discard half of the search interval.'],
 ['CS','Challenge','What is the worst-case time complexity of merge sort?',['O(n)','O(log n)','O(n log n)','O(n²)'],2,'Merge sort has logarithmic split depth and linear work per level.'],
 ['CS','Challenge','Which SQL constraint uniquely identifies each row?',['DEFAULT','PRIMARY KEY','CHECK','FOREIGN KEY'],1,'A primary key uniquely identifies rows and cannot contain null values.']
].map(([category,difficulty,prompt,options,answer,explanation],id)=>({id,category,difficulty,prompt,options,answer,explanation}));
export function createRound(category,difficulty){return questions.filter(q=>q.category===category&&q.difficulty===difficulty).map(q=>({...q}));}
export function evaluate(question,choice){return {choice,correct:choice===question.answer};}
export function secondsLeft(deadline,now){return Math.max(0,Math.ceil((deadline-now)/1000));}
