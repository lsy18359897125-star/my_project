// 官方 Hot 100 题目元数据核对日期：2026-10-10。题面与 ACM 约定、解法由本项目独立编写。
// 来源：https://leetcode.cn/studyplan/top-100-liked/
export const problems = [
  {
    "id": 1,
    "title": "两数之和",
    "slug": "two-sum",
    "difficulty": "简单",
    "tag": "哈希",
    "description": "给定数组和目标值，找出和为目标值的两个不同元素。保证恰有一组答案。",
    "input": "第一行 n 和 target；第二行 n 个整数。",
    "output": "按升序输出两个元素的下标，下标从 0 开始。",
    "constraints": "2 ≤ n ≤ 100000；元素与 target 的绝对值不超过 1000000000。",
    "cases": [
      {
        "input": "4 9\n2 7 11 15",
        "expected": "0 1"
      },
      {
        "input": "3 6\n3 2 4",
        "expected": "1 2"
      },
      {
        "input": "2 6\n3 3",
        "expected": "0 1"
      }
    ],
    "hint": "遍历时查找 target - 当前值。先查再存，避免重复使用同一个元素。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "js": "const n=next(),target=next(),m=new Map();\nfor(let i=0;i<n;i++){const x=next();if(m.has(target-x)){print(m.get(target-x),i);break;}m.set(x,i);}",
    "py": "n, target = int(next(tokens)), int(next(tokens))\nseen = {}\nfor i in range(n):\n    x = int(next(tokens))\n    if target - x in seen:\n        print(seen[target - x], i)\n        break\n    seen[x] = i",
    "hot100": true
  },
  {
    "description": "把由相同字母组成的单词分为一组。每组内排序，组与组按字典序排序。",
    "input": "一行 JSON：[\"eat\",\"tea\",\"tan\"]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维字符串数组。",
    "constraints": "单词仅含小写字母；最多 2000 个，每个长度 ≤100。",
    "cases": [
      {
        "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "expected": "[[\"ate\",\"eat\",\"tea\"],[\"bat\"],[\"nat\",\"tan\"]]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[\"\"]",
        "expected": "[[\"\"]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ngroups = {}\nfor word in data:\n    groups.setdefault(''.join(sorted(word)), []).append(word)\nanswer = sorted(sorted(g) for g in groups.values())\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "对单词排序得到相同的哈希键，再整理输出顺序。",
    "complexity": "时间 O(n·k log k) · 空间 O(nk)",
    "id": 49,
    "title": "字母异位词分组",
    "slug": "group-anagrams",
    "difficulty": "中等",
    "tag": "哈希",
    "hot100": true
  },
  {
    "description": "找出无序数组中数值连续的最长序列长度。元素在数组中的位置不要求连续。",
    "input": "一行 JSON：[100,4,200,1,3,2]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[100,4,200,1,3,2]",
        "expected": "4"
      },
      {
        "input": "[]",
        "expected": "0"
      },
      {
        "input": "[1,2,2,3]",
        "expected": "3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nvalues = set(data)\nanswer = 0\nfor x in values:\n    if x - 1 not in values:\n        y = x\n        while y in values:\n            y += 1\n        answer = max(answer, y - x)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "只从没有前驱的数开始向后扩展，避免重复扫描。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 128,
    "title": "最长连续序列",
    "slug": "longest-consecutive-sequence",
    "difficulty": "中等",
    "tag": "哈希",
    "hot100": true
  },
  {
    "id": 283,
    "title": "移动零",
    "slug": "move-zeroes",
    "difficulty": "简单",
    "tag": "双指针",
    "description": "将数组中的零移动到末尾，保持非零元素的相对顺序。",
    "input": "第一行 n；第二行 n 个整数。",
    "output": "输出移动后的 n 个数，以空格分隔。",
    "constraints": "1 ≤ n ≤ 100000；元素绝对值不超过 1000000000。",
    "cases": [
      {
        "input": "5\n0 1 0 3 12",
        "expected": "1 3 12 0 0"
      },
      {
        "input": "1\n0",
        "expected": "0"
      },
      {
        "input": "4\n1 2 3 4",
        "expected": "1 2 3 4"
      }
    ],
    "hint": "用写入指针收集非零元素，再把剩余位置填成零。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next(),a=Array.from({length:n},next);let w=0;for(const x of a)if(x!==0)a[w++]=x;while(w<n)a[w++]=0;print(...a);",
    "py": "n = int(next(tokens))\na = [int(next(tokens)) for _ in range(n)]\nwrite = 0\nfor x in a:\n    if x != 0:\n        a[write] = x\n        write += 1\nwhile write < n:\n    a[write] = 0\n    write += 1\nprint(*a)",
    "hot100": true
  },
  {
    "id": 11,
    "title": "盛最多水的容器",
    "slug": "container-with-most-water",
    "difficulty": "中等",
    "tag": "双指针",
    "description": "给定 n 条竖线的高度，选择两条线，使它们与横轴形成的容器容量最大。线之间的距离等于下标差。",
    "input": "第一行 n；第二行 n 个非负整数，表示各条线的高度。",
    "output": "输出最大容量。",
    "constraints": "2 ≤ n ≤ 100000；0 ≤ height[i] ≤ 10000。",
    "cases": [
      {
        "input": "9\n1 8 6 2 5 4 8 3 7",
        "expected": "49"
      },
      {
        "input": "2\n1 1",
        "expected": "1"
      },
      {
        "input": "5\n0 0 0 0 0",
        "expected": "0"
      }
    ],
    "hint": "从最左与最右开始，每次记录面积，然后移动较短的那条线。保留短边并缩小宽度，不会让容量增加。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next(), a=Array.from({length:n},next);\nlet l=0,r=n-1,best=0;\nwhile(l<r){best=Math.max(best,Math.min(a[l],a[r])*(r-l));if(a[l]<a[r])l++;else r--;}\nprint(best);",
    "py": "n = int(next(tokens))\na = [int(next(tokens)) for _ in range(n)]\nl, r, best = 0, n - 1, 0\nwhile l < r:\n    best = max(best, min(a[l], a[r]) * (r - l))\n    if a[l] < a[r]:\n        l += 1\n    else:\n        r -= 1\nprint(best)",
    "hot100": true
  },
  {
    "id": 15,
    "title": "三数之和",
    "slug": "3sum",
    "difficulty": "中等",
    "tag": "双指针",
    "description": "找出数组中所有和为 0 的三元组。每个三元组内部升序排列，重复值的三元组只输出一次。",
    "input": "第一行 n；第二行 n 个整数。",
    "output": "第一行三元组数量 k；接下来 k 行按字典序输出三元组。没有答案时只输出 0。",
    "constraints": "0 ≤ n ≤ 3000；元素绝对值不超过 100000。",
    "cases": [
      {
        "input": "6\n-1 0 1 2 -1 -4",
        "expected": "2\n-1 -1 2\n-1 0 1"
      },
      {
        "input": "3\n0 0 0",
        "expected": "1\n0 0 0"
      },
      {
        "input": "3\n1 2 3",
        "expected": "0"
      }
    ],
    "hint": "排序后固定第一个数，对剩余部分使用双指针。固定数、左右指针都需要跳过重复值。",
    "complexity": "时间 O(n²) · 额外空间 O(1)，不计排序与输出",
    "js": "const n=next(),a=Array.from({length:n},next).sort((a,b)=>a-b),ans=[];\nfor(let i=0;i<n-2;i++){if(i&&a[i]===a[i-1])continue;let l=i+1,r=n-1;while(l<r){const s=a[i]+a[l]+a[r];if(s<0)l++;else if(s>0)r--;else{ans.push([a[i],a[l],a[r]]);const x=a[l],y=a[r];while(l<r&&a[l]===x)l++;while(l<r&&a[r]===y)r--;}}}\nprint(ans.length);for(const row of ans)print(...row);",
    "py": "n = int(next(tokens))\na = sorted(int(next(tokens)) for _ in range(n))\nanswer = []\nfor i in range(n - 2):\n    if i and a[i] == a[i - 1]:\n        continue\n    l, r = i + 1, n - 1\n    while l < r:\n        total = a[i] + a[l] + a[r]\n        if total < 0:\n            l += 1\n        elif total > 0:\n            r -= 1\n        else:\n            answer.append((a[i], a[l], a[r]))\n            x, y = a[l], a[r]\n            while l < r and a[l] == x:\n                l += 1\n            while l < r and a[r] == y:\n                r -= 1\nprint(len(answer))\nfor row in answer:\n    print(*row)",
    "hot100": true
  },
  {
    "id": 42,
    "title": "接雨水",
    "slug": "trapping-rain-water",
    "difficulty": "困难",
    "tag": "双指针",
    "description": "给定宽度均为 1 的柱子高度，求下雨后柱子之间能够积存的雨水总量。",
    "input": "第一行 n；第二行 n 个非负高度。",
    "output": "输出雨水总量。",
    "constraints": "1 ≤ n ≤ 100000；0 ≤ height[i] ≤ 100000。",
    "cases": [
      {
        "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        "expected": "6"
      },
      {
        "input": "6\n4 2 0 3 2 5",
        "expected": "9"
      },
      {
        "input": "3\n1 2 3",
        "expected": "0"
      }
    ],
    "hint": "维护两端到当前位置的最高高度。最高高度较小的一侧，其水位已经确定，可以结算并向内移动。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next(),a=Array.from({length:n},next);let l=0,r=n-1,lm=0,rm=0,ans=0;\nwhile(l<=r){if(lm<=rm){lm=Math.max(lm,a[l]);ans+=lm-a[l++];}else{rm=Math.max(rm,a[r]);ans+=rm-a[r--];}}print(ans);",
    "py": "n = int(next(tokens))\na = [int(next(tokens)) for _ in range(n)]\nl, r, left_max, right_max, answer = 0, n - 1, 0, 0, 0\nwhile l <= r:\n    if left_max <= right_max:\n        left_max = max(left_max, a[l])\n        answer += left_max - a[l]\n        l += 1\n    else:\n        right_max = max(right_max, a[r])\n        answer += right_max - a[r]\n        r -= 1\nprint(answer)",
    "hot100": true
  },
  {
    "id": 3,
    "title": "无重复字符的最长子串",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "中等",
    "tag": "滑动窗口",
    "description": "找出字符串中不包含重复字符的最长连续子串，返回其长度。",
    "input": "一行由小写英文字母组成的字符串。空行表示空字符串。",
    "output": "输出最长子串长度。",
    "constraints": "0 ≤ 字符串长度 ≤ 100000。",
    "cases": [
      {
        "input": "abcabcbb",
        "expected": "3"
      },
      {
        "input": "bbbbb",
        "expected": "1"
      },
      {
        "input": "",
        "expected": "0"
      }
    ],
    "hint": "用哈希表记录字符最后出现的位置。左边界只向右移动，不能退回之前的位置。",
    "complexity": "时间 O(n) · 空间 O(字符集大小)",
    "js": "const s=stdin.trim(),m=new Map();let l=0,ans=0;for(let r=0;r<s.length;r++){if(m.has(s[r]))l=Math.max(l,m.get(s[r])+1);m.set(s[r],r);ans=Math.max(ans,r-l+1);}print(ans);",
    "py": "s = raw.strip()\nlast = {}\nleft, answer = 0, 0\nfor right, char in enumerate(s):\n    left = max(left, last.get(char, -1) + 1)\n    last[char] = right\n    answer = max(answer, right - left + 1)\nprint(answer)",
    "hot100": true
  },
  {
    "description": "找出 s 中所有与 p 的字母计数相同的连续窗口，返回窗口起点的升序列表。",
    "input": "一行 JSON：{\"s\":\"cbaebabacd\",\"p\":\"abc\"}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：下标数组，起点从 0 开始。",
    "constraints": "s、p 仅含小写字母，长度 ≤10000；p 非空。",
    "cases": [
      {
        "input": "{\"s\":\"cbaebabacd\",\"p\":\"abc\"}",
        "expected": "[0,6]"
      },
      {
        "input": "{\"s\":\"abab\",\"p\":\"ab\"}",
        "expected": "[0,1,2]"
      },
      {
        "input": "{\"s\":\"a\",\"p\":\"ab\"}",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ns, p = data['s'], data['p']\nneed, window = Counter(p), Counter()\nanswer = []\nfor i, c in enumerate(s):\n    window[c] += 1\n    if i >= len(p):\n        old = s[i-len(p)]\n        window[old] -= 1\n        if not window[old]:\n            del window[old]\n    if i + 1 >= len(p) and window == need:\n        answer.append(i + 1 - len(p))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "维护长度固定为 len(p) 的窗口计数。",
    "complexity": "时间 O(n·字符集大小) · 空间 O(字符集大小)",
    "id": 438,
    "title": "找到字符串中所有字母异位词",
    "slug": "find-all-anagrams-in-a-string",
    "difficulty": "中等",
    "tag": "滑动窗口",
    "hot100": true
  },
  {
    "description": "统计连续非空子数组之和恰好等于 k 的数量。",
    "input": "一行 JSON：{\"nums\":[1,1,1],\"k\":2}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "{\"nums\":[1,1,1],\"k\":2}",
        "expected": "2"
      },
      {
        "input": "{\"nums\":[1,-1,0],\"k\":0}",
        "expected": "3"
      },
      {
        "input": "{\"nums\":[],\"k\":0}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncount = {0: 1}\ntotal = answer = 0\nfor x in data['nums']:\n    total += x\n    answer += count.get(total-data['k'], 0)\n    count[total] = count.get(total, 0) + 1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "前缀和差等于 k。先累计已有前缀，再加入当前前缀。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 560,
    "title": "和为 K 的子数组",
    "slug": "subarray-sum-equals-k",
    "difficulty": "中等",
    "tag": "子串",
    "hot100": true
  },
  {
    "description": "长度为 k 的窗口从左到右滑动，输出每个窗口中的最大值。",
    "input": "一行 JSON：{\"nums\":[1,3,-1,-3,5,3,6,7],\"k\":3}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "1 ≤ k ≤ len(nums) ≤10000。",
    "cases": [
      {
        "input": "{\"nums\":[1,3,-1,-3,5,3,6,7],\"k\":3}",
        "expected": "[3,3,5,5,6,7]"
      },
      {
        "input": "{\"nums\":[1],\"k\":1}",
        "expected": "[1]"
      },
      {
        "input": "{\"nums\":[2,2,2],\"k\":2}",
        "expected": "[2,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, k = data['nums'], data['k']\nqueue, answer = deque(), []\nfor i, x in enumerate(a):\n    while queue and queue[0] <= i-k:\n        queue.popleft()\n    while queue and a[queue[-1]] <= x:\n        queue.pop()\n    queue.append(i)\n    if i >= k-1:\n        answer.append(a[queue[0]])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "双端队列只保留有可能成为最大值的下标。",
    "complexity": "时间 O(n) · 空间 O(k)",
    "id": 239,
    "title": "滑动窗口最大值",
    "slug": "sliding-window-maximum",
    "difficulty": "困难",
    "tag": "子串",
    "hot100": true
  },
  {
    "description": "在 s 中寻找包含 t 每个字符及其所需次数的最短连续片段。长度相同时返回起点更早的片段；不存在时返回空串。",
    "input": "一行 JSON：{\"s\":\"ADOBECODEBANC\",\"t\":\"ABC\"}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：字符串。",
    "constraints": "s、t 为英文字母字符串，长度 ≤10000；t 非空。",
    "cases": [
      {
        "input": "{\"s\":\"ADOBECODEBANC\",\"t\":\"ABC\"}",
        "expected": "\"BANC\""
      },
      {
        "input": "{\"s\":\"a\",\"t\":\"aa\"}",
        "expected": "\"\""
      },
      {
        "input": "{\"s\":\"a\",\"t\":\"a\"}",
        "expected": "\"a\""
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ns, t = data['s'], data['t']\nneed = Counter(t)\nmissing, left, start, best = len(t), 0, 0, len(s)+1\nfor right, c in enumerate(s):\n    if need[c] > 0:\n        missing -= 1\n    need[c] -= 1\n    while missing == 0:\n        if right-left+1 < best:\n            start, best = left, right-left+1\n        need[s[left]] += 1\n        if need[s[left]] > 0:\n            missing += 1\n        left += 1\nanswer = s[start:start+best] if best <= len(s) else ''\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "右边界扩张直到覆盖，左边界收缩以寻找最短覆盖。",
    "complexity": "时间 O(n+m) · 空间 O(字符集大小)",
    "id": 76,
    "title": "最小覆盖子串",
    "slug": "minimum-window-substring",
    "difficulty": "困难",
    "tag": "子串",
    "hot100": true
  },
  {
    "id": 53,
    "title": "最大子数组和",
    "slug": "maximum-subarray",
    "difficulty": "中等",
    "tag": "普通数组",
    "description": "在非空数组中选择一段连续且非空的子数组，使元素之和最大。",
    "input": "第一行 n；第二行 n 个整数。",
    "output": "输出最大子数组和。",
    "constraints": "1 ≤ n ≤ 100000；元素绝对值不超过 100000。",
    "cases": [
      {
        "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
        "expected": "6"
      },
      {
        "input": "1\n-5",
        "expected": "-5"
      },
      {
        "input": "3\n1 2 3",
        "expected": "6"
      }
    ],
    "hint": "考虑以当前位置结尾的最优答案：重新开始，或接上前一个位置。不要把全负数的答案初始化成 0。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next();let cur=next(),ans=cur;for(let i=1;i<n;i++){const x=next();cur=Math.max(x,cur+x);ans=Math.max(ans,cur);}print(ans);",
    "py": "n = int(next(tokens))\ncurrent = answer = int(next(tokens))\nfor _ in range(n - 1):\n    x = int(next(tokens))\n    current = max(x, current + x)\n    answer = max(answer, current)\nprint(answer)",
    "hot100": true
  },
  {
    "description": "合并互相重叠的闭区间，返回按左端点升序排列的结果。端点相接也应合并。",
    "input": "一行 JSON：[[1,3],[2,6],[8,10]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维整数数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "expected": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[[1,4],[4,5]]",
        "expected": "[[1,5]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer = []\nfor left, right in sorted(data):\n    if answer and left <= answer[-1][1]:\n        answer[-1][1] = max(answer[-1][1], right)\n    else:\n        answer.append([left, right])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "排序后只需与最后一个已合并区间比较。",
    "complexity": "时间 O(n log n) · 空间 O(n)",
    "id": 56,
    "title": "合并区间",
    "slug": "merge-intervals",
    "difficulty": "中等",
    "tag": "普通数组",
    "hot100": true
  },
  {
    "description": "将数组循环向右移动 k 个位置，返回最终数组。",
    "input": "一行 JSON：{\"nums\":[1,2,3,4,5,6,7],\"k\":3}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "nums 非空，长度 ≤10000；0 ≤ k ≤100000。",
    "cases": [
      {
        "input": "{\"nums\":[1,2,3,4,5,6,7],\"k\":3}",
        "expected": "[5,6,7,1,2,3,4]"
      },
      {
        "input": "{\"nums\":[1],\"k\":9}",
        "expected": "[1]"
      },
      {
        "input": "{\"nums\":[1,2],\"k\":0}",
        "expected": "[1,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na = data['nums']\nk = data['k'] % len(a)\ndef reverse(left, right):\n    while left < right:\n        a[left], a[right] = a[right], a[left]\n        left, right = left+1, right-1\nreverse(0, len(a)-1)\nreverse(0, k-1)\nreverse(k, len(a)-1)\nanswer = a\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "三次反转：整体、前 k 个、剩余部分。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 189,
    "title": "轮转数组",
    "slug": "rotate-array",
    "difficulty": "中等",
    "tag": "普通数组",
    "hot100": true
  },
  {
    "id": 238,
    "title": "除了自身以外数组的乘积",
    "slug": "product-of-array-except-self",
    "difficulty": "中等",
    "tag": "普通数组",
    "description": "对每个位置，求数组中除该位置外所有元素的乘积。不能使用除法。",
    "input": "第一行 n；第二行 n 个整数。",
    "output": "输出 n 个乘积，以空格分隔。",
    "constraints": "2 ≤ n ≤ 100000；所有前缀、后缀和最终乘积均在 32 位有符号整数范围内。",
    "cases": [
      {
        "input": "4\n1 2 3 4",
        "expected": "24 12 8 6"
      },
      {
        "input": "5\n-1 1 0 -3 3",
        "expected": "0 0 9 0 0"
      },
      {
        "input": "2\n0 0",
        "expected": "0 0"
      }
    ],
    "hint": "先把左侧乘积写入答案，再从右往左乘上右侧乘积。零元素无需特殊分支。",
    "complexity": "时间 O(n) · 额外空间 O(1)，不计输出",
    "js": "const n=next(),a=Array.from({length:n},next),b=Array(n);let v=1;for(let i=0;i<n;i++){b[i]=v;v*=a[i];}v=1;for(let i=n-1;i>=0;i--){b[i]*=v;v*=a[i];}print(...b);",
    "py": "n = int(next(tokens))\na = [int(next(tokens)) for _ in range(n)]\nanswer, product = [1] * n, 1\nfor i in range(n):\n    answer[i] = product\n    product *= a[i]\nproduct = 1\nfor i in range(n - 1, -1, -1):\n    answer[i] *= product\n    product *= a[i]\nprint(*answer)",
    "hot100": true
  },
  {
    "description": "找出未出现在数组中的最小正整数。要求算法使用常数额外空间。",
    "input": "一行 JSON：[3,4,-1,1]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[3,4,-1,1]",
        "expected": "2"
      },
      {
        "input": "[]",
        "expected": "1"
      },
      {
        "input": "[1,2,0]",
        "expected": "3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, n = data, len(data)\nfor i in range(n):\n    while 1 <= a[i] <= n and a[a[i]-1] != a[i]:\n        j = a[i]-1\n        a[i], a[j] = a[j], a[i]\nanswer = n+1\nfor i, x in enumerate(a):\n    if x != i+1:\n        answer = i+1\n        break\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "把范围内的数 x 放到下标 x-1，最后扫描第一个错位的位置。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 41,
    "title": "缺失的第一个正数",
    "slug": "first-missing-positive",
    "difficulty": "困难",
    "tag": "普通数组",
    "hot100": true
  },
  {
    "description": "如果矩阵某个位置为零，将它所在的整行与整列都设为零。判断必须基于修改前的矩阵。",
    "input": "一行 JSON：[[1,1,1],[1,0,1],[1,1,1]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：矩阵。",
    "constraints": "1 ≤ 行数、列数 ≤100；矩阵规则且非空。",
    "cases": [
      {
        "input": "[[1,1,1],[1,0,1],[1,1,1]]",
        "expected": "[[1,0,1],[0,0,0],[1,0,1]]"
      },
      {
        "input": "[[0,1],[2,3]]",
        "expected": "[[0,0],[0,3]]"
      },
      {
        "input": "[[1]]",
        "expected": "[[1]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na = data\nm, n = len(a), len(a[0])\nrow_zero = any(x == 0 for x in a[0])\ncol_zero = any(row[0] == 0 for row in a)\nfor i in range(1,m):\n    for j in range(1,n):\n        if a[i][j] == 0:\n            a[i][0] = a[0][j] = 0\nfor i in range(1,m):\n    for j in range(1,n):\n        if a[i][0] == 0 or a[0][j] == 0:\n            a[i][j] = 0\nif row_zero:\n    for j in range(n): a[0][j] = 0\nif col_zero:\n    for row in a:\n        row[0] = 0\nanswer = a\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "第一行和第一列用作标记，单独记录它们原本是否有零。",
    "complexity": "时间 O(mn) · 额外空间 O(1)",
    "id": 73,
    "title": "矩阵置零",
    "slug": "set-matrix-zeroes",
    "difficulty": "中等",
    "tag": "矩阵",
    "hot100": true
  },
  {
    "description": "按从左上角开始顺时针向内的螺旋顺序访问矩阵，输出访问序列。",
    "input": "一行 JSON：[[1,2,3],[4,5,6],[7,8,9]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "行数、列数 ≤100；矩阵可为空。",
    "cases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "expected": "[1,2,3,6,9,8,7,4,5]"
      },
      {
        "input": "[[1,2,3]]",
        "expected": "[1,2,3]"
      },
      {
        "input": "[]",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na = data\ntop, bottom = 0, len(a)-1\nleft, right = 0, len(a[0])-1 if a else -1\nanswer = []\nwhile top <= bottom and left <= right:\n    answer.extend(a[top][left:right+1]); top += 1\n    for i in range(top,bottom+1):\n        answer.append(a[i][right])\n    right -= 1\n    if top <= bottom:\n        answer.extend(reversed(a[bottom][left:right+1])); bottom -= 1\n    if left <= right:\n        for i in range(bottom,top-1,-1):\n            answer.append(a[i][left])\n        left += 1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "维护四条边界，每完成一条边便收缩它。",
    "complexity": "时间 O(mn) · 空间 O(mn)，用于输出",
    "id": 54,
    "title": "螺旋矩阵",
    "slug": "spiral-matrix",
    "difficulty": "中等",
    "tag": "矩阵",
    "hot100": true
  },
  {
    "description": "将 n×n 方阵顺时针旋转 90 度，返回旋转后的矩阵。",
    "input": "一行 JSON：[[1,2],[3,4]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：矩阵。",
    "constraints": "1 ≤ n ≤100。",
    "cases": [
      {
        "input": "[[1,2],[3,4]]",
        "expected": "[[3,1],[4,2]]"
      },
      {
        "input": "[[1]]",
        "expected": "[[1]]"
      },
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "expected": "[[7,4,1],[8,5,2],[9,6,3]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, n = data, len(data)\nfor i in range(n):\n    for j in range(i+1,n):\n        a[i][j], a[j][i] = a[j][i], a[i][j]\nfor row in a:\n    row.reverse()\nanswer = a\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "先转置，再反转每一行，可原地完成。",
    "complexity": "时间 O(n²) · 额外空间 O(1)",
    "id": 48,
    "title": "旋转图像",
    "slug": "rotate-image",
    "difficulty": "中等",
    "tag": "矩阵",
    "hot100": true
  },
  {
    "description": "矩阵的每一行和每一列都按非递减顺序排列，判断是否存在 target。",
    "input": "一行 JSON：{\"matrix\":[[1,4],[2,5]],\"target\":4}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "行数、列数 ≤200；矩阵可为空。",
    "cases": [
      {
        "input": "{\"matrix\":[[1,4],[2,5]],\"target\":4}",
        "expected": "true"
      },
      {
        "input": "{\"matrix\":[[1,4],[2,5]],\"target\":3}",
        "expected": "false"
      },
      {
        "input": "{\"matrix\":[],\"target\":1}",
        "expected": "false"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, target = data['matrix'], data['target']\ni, j = 0, len(a[0])-1 if a else -1\nanswer = False\nwhile i < len(a) and j >= 0:\n    if a[i][j] == target:\n        answer = True\n        break\n    if a[i][j] > target:\n        j -= 1\n    else:\n        i += 1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "从右上角开始，比目标大则左移，否则下移。",
    "complexity": "时间 O(m+n) · 空间 O(1)",
    "id": 240,
    "title": "搜索二维矩阵 II",
    "slug": "search-a-2d-matrix-ii",
    "difficulty": "中等",
    "tag": "矩阵",
    "hot100": true
  },
  {
    "description": "构建两条链表，其独立前缀分别为 a、b，尾部共同连接到 common 表示的同一段节点。返回第一个共享节点的值；没有共享节点返回 null。",
    "input": "一行 JSON：{\"a\":[4,1],\"b\":[5,6,1],\"common\":[8,4,5]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：共享节点值或 null。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "{\"a\":[4,1],\"b\":[5,6,1],\"common\":[8,4,5]}",
        "expected": "8"
      },
      {
        "input": "{\"a\":[1],\"b\":[1],\"common\":[]}",
        "expected": "null"
      },
      {
        "input": "{\"a\":[],\"b\":[2],\"common\":[3]}",
        "expected": "3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncommon = build_list(data['common'])\ndef prefix(values):\n    dummy = ListNode()\n    tail = dummy\n    for x in values:\n        tail.next = ListNode(x)\n        tail = tail.next\n    tail.next = common\n    return dummy.next\na, b = prefix(data['a']), prefix(data['b'])\np, q = a, b\nwhile p is not q:\n    p = p.next if p else b\n    q = q.next if q else a\nanswer = p.val if p else None\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "两个指针走完本链表后换到另一条，抵消长度差。比较节点身份。",
    "complexity": "时间 O(m+n) · 额外空间 O(1)",
    "id": 160,
    "title": "相交链表",
    "slug": "intersection-of-two-linked-lists",
    "difficulty": "简单",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "反转单向链表。输入数组依次表示节点，输出反转后节点的值。",
    "input": "一行 JSON：[1,2,3,4,5]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[1,2,3,4,5]",
        "expected": "[5,4,3,2,1]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1]",
        "expected": "[1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nnode, previous = build_list(data), None\nwhile node:\n    following = node.next\n    node.next = previous\n    previous, node = node, following\nanswer = list_values(previous)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "先保留下一节点，再反转当前指针。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 206,
    "title": "反转链表",
    "slug": "reverse-linked-list",
    "difficulty": "简单",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "判断单向链表的值从前到后和从后到前是否一致。空链表视为回文。",
    "input": "一行 JSON：[1,2,2,1]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[1,2,2,1]",
        "expected": "true"
      },
      {
        "input": "[1,2]",
        "expected": "false"
      },
      {
        "input": "[]",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nhead = build_list(data)\nslow = fast = head\nwhile fast and fast.next:\n    slow, fast = slow.next, fast.next.next\nprevious = None\nwhile slow:\n    following = slow.next\n    slow.next = previous\n    previous, slow = slow, following\nanswer = True\nwhile previous:\n    if head.val != previous.val:\n        answer = False\n        break\n    head, previous = head.next, previous.next\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "快慢指针找中点，反转后半部分，逐个比较值。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 234,
    "title": "回文链表",
    "slug": "palindrome-linked-list",
    "difficulty": "简单",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "尾节点连接到下标 pos 的节点；pos=-1 表示不连接。判断该链表是否有环。",
    "input": "一行 JSON：{\"values\":[3,2,0,-4],\"pos\":1}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "节点数量 ≤10000；pos 为 -1 或合法下标。",
    "cases": [
      {
        "input": "{\"values\":[3,2,0,-4],\"pos\":1}",
        "expected": "true"
      },
      {
        "input": "{\"values\":[1],\"pos\":-1}",
        "expected": "false"
      },
      {
        "input": "{\"values\":[1,2],\"pos\":0}",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nnodes = [ListNode(x) for x in data['values']]\nfor a,b in zip(nodes,nodes[1:]):\n    a.next = b\nif nodes and data['pos'] >= 0:\n    nodes[-1].next = nodes[data['pos']]\nhead = nodes[0] if nodes else None\nslow = fast = head\nmeeting = None\nwhile fast and fast.next:\n    slow, fast = slow.next, fast.next.next\n    if slow is fast:\n        meeting = slow\n        break\nanswer = meeting is not None\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "快慢指针在环内相遇。找入口时，一个指针从头出发，另一个从相遇点出发。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 141,
    "title": "环形链表",
    "slug": "linked-list-cycle",
    "difficulty": "简单",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "尾节点连接到下标 pos 的节点；pos=-1 表示无环。返回环入口节点在原数组中的下标，无环返回 -1。",
    "input": "一行 JSON：{\"values\":[3,2,0,-4],\"pos\":1}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数下标。",
    "constraints": "节点数量 ≤10000；pos 为 -1 或合法下标。",
    "cases": [
      {
        "input": "{\"values\":[3,2,0,-4],\"pos\":1}",
        "expected": "1"
      },
      {
        "input": "{\"values\":[1],\"pos\":-1}",
        "expected": "-1"
      },
      {
        "input": "{\"values\":[1,2],\"pos\":0}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nnodes = [ListNode(x) for x in data['values']]\nfor a,b in zip(nodes,nodes[1:]):\n    a.next = b\nif nodes and data['pos'] >= 0:\n    nodes[-1].next = nodes[data['pos']]\nhead = nodes[0] if nodes else None\nslow = fast = head\nmeeting = None\nwhile fast and fast.next:\n    slow, fast = slow.next, fast.next.next\n    if slow is fast:\n        meeting = slow\n        break\nanswer = -1\nif meeting:\n    node = head\n    while node is not meeting:\n        node, meeting = node.next, meeting.next\n    answer = next(i for i,x in enumerate(nodes) if x is node)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "快慢指针在环内相遇。找入口时，一个指针从头出发，另一个从相遇点出发。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 142,
    "title": "环形链表 II",
    "slug": "linked-list-cycle-ii",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "把两个值已非递减排列的单向链表合并成一个非递减链表。",
    "input": "一行 JSON：{\"a\":[1,2,4],\"b\":[1,3,4]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：合并后的值数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "{\"a\":[1,2,4],\"b\":[1,3,4]}",
        "expected": "[1,1,2,3,4,4]"
      },
      {
        "input": "{\"a\":[],\"b\":[]}",
        "expected": "[]"
      },
      {
        "input": "{\"a\":[],\"b\":[0]}",
        "expected": "[0]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, b = build_list(data['a']), build_list(data['b'])\ndummy = tail = ListNode()\nwhile a and b:\n    if a.val <= b.val:\n        tail.next, a = a, a.next\n    else:\n        tail.next, b = b, b.next\n    tail = tail.next\ntail.next = a or b\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "不断接上值较小的节点，最后连接剩余链表。",
    "complexity": "时间 O(m+n) · 额外空间 O(1)",
    "id": 21,
    "title": "合并两个有序链表",
    "slug": "merge-two-sorted-lists",
    "difficulty": "简单",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "两条链表各表示一个非负整数，数字按低位到高位存储。计算它们的和，并以相同格式输出。",
    "input": "一行 JSON：{\"a\":[2,4,3],\"b\":[5,6,4]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：结果数字数组。",
    "constraints": "两数组非空，长度 ≤1000，元素为 0..9，无无意义最高位零。",
    "cases": [
      {
        "input": "{\"a\":[2,4,3],\"b\":[5,6,4]}",
        "expected": "[7,0,8]"
      },
      {
        "input": "{\"a\":[0],\"b\":[0]}",
        "expected": "[0]"
      },
      {
        "input": "{\"a\":[9,9],\"b\":[1]}",
        "expected": "[0,0,1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na, b = build_list(data['a']), build_list(data['b'])\ndummy = tail = ListNode()\ncarry = 0\nwhile a or b or carry:\n    total = (a.val if a else 0) + (b.val if b else 0) + carry\n    carry, digit = divmod(total,10)\n    tail.next = ListNode(digit)\n    tail = tail.next\n    a, b = a.next if a else None, b.next if b else None\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "逐位相加并维护进位，最高位可能产生一个新节点。",
    "complexity": "时间 O(max(m,n)) · 空间 O(max(m,n))",
    "id": 2,
    "title": "两数相加",
    "slug": "add-two-numbers",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "删除单向链表从末尾数第 n 个节点，返回剩余链表。",
    "input": "一行 JSON：{\"values\":[1,2,3,4,5],\"n\":2}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "1 ≤ n ≤ 节点数量 ≤10000。",
    "cases": [
      {
        "input": "{\"values\":[1,2,3,4,5],\"n\":2}",
        "expected": "[1,2,3,5]"
      },
      {
        "input": "{\"values\":[1],\"n\":1}",
        "expected": "[]"
      },
      {
        "input": "{\"values\":[1,2],\"n\":2}",
        "expected": "[2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndummy = ListNode(0,build_list(data['values']))\nfast = slow = dummy\nfor _ in range(data['n']):\n    fast = fast.next\nwhile fast.next:\n    fast, slow = fast.next, slow.next\nslow.next = slow.next.next\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "哨兵节点统一删除头节点的情况。快慢指针保持 n 个节点间距。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 19,
    "title": "删除链表的倒数第 N 个结点",
    "slug": "remove-nth-node-from-end-of-list",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "交换每两个相邻节点，奇数长度时保留末尾节点。应交换节点连接，不仅交换节点值。",
    "input": "一行 JSON：[1,2,3,4]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[1,2,3,4]",
        "expected": "[2,1,4,3]"
      },
      {
        "input": "[1,2,3]",
        "expected": "[2,1,3]"
      },
      {
        "input": "[]",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndummy = previous = ListNode(0,build_list(data))\nwhile previous.next and previous.next.next:\n    a, b = previous.next, previous.next.next\n    a.next, b.next, previous.next = b.next, a, b\n    previous = a\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "使用前驱节点重接一对节点的三个 next 指针。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 24,
    "title": "两两交换链表中的节点",
    "slug": "swap-nodes-in-pairs",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "将单向链表每 k 个节点分成一组并反转。不足 k 个的末尾节点保持原顺序。",
    "input": "一行 JSON：{\"values\":[1,2,3,4,5],\"k\":2}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "1 ≤ k ≤ 节点数量 ≤10000。",
    "cases": [
      {
        "input": "{\"values\":[1,2,3,4,5],\"k\":2}",
        "expected": "[2,1,4,3,5]"
      },
      {
        "input": "{\"values\":[1,2,3,4,5],\"k\":3}",
        "expected": "[3,2,1,4,5]"
      },
      {
        "input": "{\"values\":[1],\"k\":1}",
        "expected": "[1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndummy = before = ListNode(0,build_list(data['values']))\nk = data['k']\nwhile True:\n    end = before\n    for _ in range(k):\n        end = end.next\n        if end is None:\n            break\n    if end is None:\n        break\n    after, node, previous = end.next, before.next, end.next\n    first = node\n    while node is not after:\n        following = node.next\n        node.next = previous\n        previous, node = node, following\n    before.next = end\n    before = first\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "先确认当前组足够长，再局部反转，保留下一组的连接。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 25,
    "title": "K 个一组翻转链表",
    "slug": "reverse-nodes-in-k-group",
    "difficulty": "困难",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "复制同时具有 next 和 random 指针的链表。输入按 next 顺序排列，每项为 [值,random目标下标]；null 表示 random 为空。输出副本的同种序列化结果。",
    "input": "一行 JSON：[[7,null],[13,0],[11,4],[10,2],[1,0]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维数组。",
    "constraints": "节点数 ≤2000；random 下标合法或 null。",
    "cases": [
      {
        "input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "expected": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[[1,0]]",
        "expected": "[[1,0]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nnodes = [ListNode(row[0]) for row in data]\nfor i,node in enumerate(nodes):\n    node.next = nodes[i+1] if i+1 < len(nodes) else None\n    node.random = nodes[data[i][1]] if data[i][1] is not None else None\ncopies = {node:ListNode(node.val) for node in nodes}\nfor node in nodes:\n    copies[node].next = copies.get(node.next)\n    copies[node].random = copies.get(node.random)\nnew_nodes = [copies[node] for node in nodes]\nindex = {node:i for i,node in enumerate(new_nodes)}\nanswer = [[node.val,index.get(node.random)] for node in new_nodes]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "先创建所有新节点，之后只让副本的指针指向副本。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 138,
    "title": "随机链表的复制",
    "slug": "copy-list-with-random-pointer",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "将单向链表按节点值非递减排序。",
    "input": "一行 JSON：[4,2,1,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[4,2,1,3]",
        "expected": "[1,2,3,4]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[3,1,3]",
        "expected": "[1,3,3]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndef sort(head):\n    if not head or not head.next:\n        return head\n    slow, fast = head, head.next\n    while fast and fast.next:\n        slow, fast = slow.next, fast.next.next\n    right, slow.next = slow.next, None\n    a, b = sort(head), sort(right)\n    dummy = tail = ListNode()\n    while a and b:\n        if a.val <= b.val:\n            tail.next, a = a, a.next\n        else:\n            tail.next, b = b, b.next\n        tail = tail.next\n    tail.next = a or b\n    return dummy.next\nanswer = list_values(sort(build_list(data)))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "快慢指针分割，递归归并两个已排序链表。",
    "complexity": "时间 O(n log n) · 额外空间 O(log n)",
    "id": 148,
    "title": "排序链表",
    "slug": "sort-list",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "把 k 条非递减单向链表合并为一条非递减链表。",
    "input": "一行 JSON：[[1,4,5],[1,3,4],[2,6]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[[1,4,5],[1,3,4],[2,6]]",
        "expected": "[1,1,2,3,4,4,5,6]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[[],[0]]",
        "expected": "[0]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nheap = []\nfor i,values in enumerate(data):\n    node = build_list(values)\n    if node:\n        heappush(heap,(node.val,i,node))\ndummy = tail = ListNode()\nwhile heap:\n    _, i, node = heappop(heap)\n    following = node.next\n    tail.next = node\n    tail = node\n    if following:\n        heappush(heap,(following.val,i,following))\nanswer = list_values(dummy.next)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "最小堆维护每条链表当前未合并的头节点。",
    "complexity": "时间 O(N log k) · 额外空间 O(k)",
    "id": 23,
    "title": "合并 K 个升序链表",
    "slug": "merge-k-sorted-lists",
    "difficulty": "困难",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "实现固定容量 LRU 缓存。get 返回值或 -1；put 添加或更新键值并把该键视为最近使用，超容量时淘汰最久未使用的键。",
    "input": "一行 JSON：{\"capacity\":2,\"ops\":[[\"put\",1,1],[\"get\",1]]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：每次操作的结果数组，put 的结果为 null。",
    "constraints": "容量 1..2000；ops 数量 ≤10000。",
    "cases": [
      {
        "input": "{\"capacity\":2,\"ops\":[[\"put\",1,1],[\"put\",2,2],[\"get\",1],[\"put\",3,3],[\"get\",2],[\"put\",4,4],[\"get\",1],[\"get\",3],[\"get\",4]]}",
        "expected": "[null,null,1,null,-1,null,-1,3,4]"
      },
      {
        "input": "{\"capacity\":1,\"ops\":[[\"put\",1,1],[\"put\",1,2],[\"get\",1]]}",
        "expected": "[null,null,2]"
      },
      {
        "input": "{\"capacity\":1,\"ops\":[[\"get\",5]]}",
        "expected": "[-1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncache, answer = OrderedDict(), []\nfor op in data['ops']:\n    if op[0] == 'get':\n        value = cache.get(op[1],-1)\n        if op[1] in cache:\n            cache.move_to_end(op[1])\n        answer.append(value)\n    else:\n        cache[op[1]] = op[2]\n        cache.move_to_end(op[1])\n        if len(cache) > data['capacity']:\n            cache.popitem(last=False)\n        answer.append(None)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "有序哈希表同时支持键查找与最近使用顺序。",
    "complexity": "每次操作 O(1) · 空间 O(capacity)",
    "id": 146,
    "title": "LRU 缓存",
    "slug": "lru-cache",
    "difficulty": "中等",
    "tag": "链表",
    "hot100": true
  },
  {
    "description": "输出二叉树的中序遍历：左子树、根节点、右子树。",
    "input": "一行 JSON：[1,null,2,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[1,null,2,3]",
        "expected": "[1,3,2]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1]",
        "expected": "[1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot = build_tree(data)\nstack, node, answer = [], root, []\nwhile stack or node:\n    while node:\n        stack.append(node)\n        node = node.left\n    node = stack.pop()\n    answer.append(node.val)\n    node = node.right\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "显式栈模拟递归，先一路深入左子树。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 94,
    "title": "二叉树的中序遍历",
    "slug": "binary-tree-inorder-traversal",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "返回从根到叶子路径上的最大节点数。空树深度为零。",
    "input": "一行 JSON：[3,9,20,null,null,15,7]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "expected": "3"
      },
      {
        "input": "[]",
        "expected": "0"
      },
      {
        "input": "[1,null,2]",
        "expected": "2"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndef depth(node):\n    return 0 if node is None else 1+max(depth(node.left),depth(node.right))\nanswer = depth(build_tree(data))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "当前深度等于两个孩子的最大深度加一。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 104,
    "title": "二叉树的最大深度",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "交换树中每个节点的左右孩子，返回翻转后的树。输出省略末尾 null。",
    "input": "一行 JSON：[4,2,7,1,3,6,9]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：层序数组。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[4,2,7,1,3,6,9]",
        "expected": "[4,7,2,9,6,3,1]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1,null,2]",
        "expected": "[1,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot = build_tree(data)\ndef invert(node):\n    if node:\n        node.left,node.right = node.right,node.left\n        invert(node.left)\n        invert(node.right)\ninvert(root)\nanswer = tree_values(root)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "遍历所有节点并交换左右子树。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 226,
    "title": "翻转二叉树",
    "slug": "invert-binary-tree",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "判断二叉树是否关于根左右镜像对称，空树视为对称。",
    "input": "一行 JSON：[1,2,2,3,4,4,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[1,2,2,3,4,4,3]",
        "expected": "true"
      },
      {
        "input": "[1,2,2,null,3,null,3]",
        "expected": "false"
      },
      {
        "input": "[]",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot = build_tree(data)\ndef mirror(a,b):\n    if not a or not b:\n        return a is b\n    return a.val==b.val and mirror(a.left,b.right) and mirror(a.right,b.left)\nanswer = not root or mirror(root.left,root.right)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "成对比较镜像位置的值和结构。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 101,
    "title": "对称二叉树",
    "slug": "symmetric-tree",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "求树中任意两个节点之间最长路径的边数。空树返回零。",
    "input": "一行 JSON：[1,2,3,4,5]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[1,2,3,4,5]",
        "expected": "3"
      },
      {
        "input": "[1,2]",
        "expected": "1"
      },
      {
        "input": "[]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer = 0\ndef depth(node):\n    if not node:\n        return 0\n    l,r = depth(node.left),depth(node.right)\n    best[0] = max(best[0],l+r)\n    return 1+max(l,r)\nbest = [0]\ndepth(build_tree(data))\nanswer = best[0]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "通过某个节点的最长路径，是左右子树深度之和。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 543,
    "title": "二叉树的直径",
    "slug": "diameter-of-binary-tree",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "按层从上到下、每层从左到右输出树的节点值。",
    "input": "一行 JSON：[3,9,20,null,null,15,7]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维数组。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "expected": "[[3],[9,20],[15,7]]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1]",
        "expected": "[[1]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot = build_tree(data)\nqueue,answer = deque([root] if root else []),[]\nwhile queue:\n    level = []\n    for _ in range(len(queue)):\n        node = queue.popleft()\n        level.append(node.val)\n        if node.left: queue.append(node.left)\n        if node.right: queue.append(node.right)\n    answer.append(level)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每轮固定当前队列长度，恰好处理一层。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 102,
    "title": "二叉树的层序遍历",
    "slug": "binary-tree-level-order-traversal",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "把严格递增数组转换为高度平衡的二叉搜索树。为保证唯一输出，每个区间选择偏左的中点作为根。",
    "input": "一行 JSON：[-10,-3,0,5,9]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：省略末尾 null 的层序数组。",
    "constraints": "数组严格递增，长度 ≤2000。树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[-10,-3,0,5,9]",
        "expected": "[0,-10,5,null,-3,null,9]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1,2]",
        "expected": "[1,null,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndef build(left,right):\n    if left > right: return None\n    mid = (left+right)//2\n    return TreeNode(data[mid],build(left,mid-1),build(mid+1,right))\nanswer = tree_values(build(0,len(data)-1))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "有序区间中点为根，两边递归构造。",
    "complexity": "时间 O(n) · 空间 O(log n)",
    "id": 108,
    "title": "将有序数组转换为二叉搜索树",
    "slug": "convert-sorted-array-to-binary-search-tree",
    "difficulty": "简单",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "判断树是否为严格二叉搜索树：每个节点左子树的所有值更小，右子树的所有值更大。",
    "input": "一行 JSON：[2,1,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[2,1,3]",
        "expected": "true"
      },
      {
        "input": "[5,1,4,null,null,3,6]",
        "expected": "false"
      },
      {
        "input": "[2,2,3]",
        "expected": "false"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndef valid(node,low,high):\n    if not node: return True\n    return low < node.val < high and valid(node.left,low,node.val) and valid(node.right,node.val,high)\nanswer = valid(build_tree(data),float('-inf'),float('inf'))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "递归携带整个祖先链约束的开区间，不能只比较直接孩子。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 98,
    "title": "验证二叉搜索树",
    "slug": "validate-binary-search-tree",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "在严格二叉搜索树中找到按值从小到大排列的第 k 个节点。",
    "input": "一行 JSON：{\"tree\":[3,1,4,null,2],\"k\":1}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "1 ≤ k ≤ 节点数。树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "{\"tree\":[3,1,4,null,2],\"k\":1}",
        "expected": "1"
      },
      {
        "input": "{\"tree\":[5,3,6,2,4,null,null,1],\"k\":3}",
        "expected": "3"
      },
      {
        "input": "{\"tree\":[1],\"k\":1}",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nnode = build_tree(data['tree'])\nstack,k = [],data['k']\nwhile True:\n    while node:\n        stack.append(node)\n        node=node.left\n    node=stack.pop()\n    k-=1\n    if k==0:\n        answer=node.val\n        break\n    node=node.right\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "BST 的中序遍历就是升序，遍历到第 k 个便停止。",
    "complexity": "时间 O(h+k) · 空间 O(h)",
    "id": 230,
    "title": "二叉搜索树中第 K 小的元素",
    "slug": "kth-smallest-element-in-a-bst",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "从树的右侧观察，每层仅看到最右边的非空节点。返回这些节点的值。",
    "input": "一行 JSON：[1,2,3,null,5,null,4]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[1,2,3,null,5,null,4]",
        "expected": "[1,3,4]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1,2]",
        "expected": "[1,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot=build_tree(data)\nqueue,answer=deque([root] if root else []),[]\nwhile queue:\n    for _ in range(len(queue)):\n        node=queue.popleft()\n        if node.left: queue.append(node.left)\n        if node.right: queue.append(node.right)\n    answer.append(node.val)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "层序遍历，每层最后弹出的节点就是右视图节点。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 199,
    "title": "二叉树的右视图",
    "slug": "binary-tree-right-side-view",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "把树按前序遍历顺序展开成仅由 right 指针连接的链表，所有 left 指针设为空。输出沿 right 访问得到的值。",
    "input": "一行 JSON：[1,2,5,3,4,null,6]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：值数组。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[1,2,5,3,4,null,6]",
        "expected": "[1,2,3,4,5,6]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[1]",
        "expected": "[1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot=build_tree(data)\nnode=root\nwhile node:\n    if node.left:\n        tail=node.left\n        while tail.right: tail=tail.right\n        tail.right=node.right\n        node.right,node.left=node.left,None\n    node=node.right\nanswer=[]\nnode=root\nwhile node:\n    answer.append(node.val)\n    node=node.right\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "将原右子树接到左子树最右节点，再把左子树移到右侧。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 114,
    "title": "二叉树展开为链表",
    "slug": "flatten-binary-tree-to-linked-list",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "给定同一棵树的前序和中序遍历，重建二叉树。节点值互不相同。",
    "input": "一行 JSON：{\"preorder\":[3,9,20,15,7],\"inorder\":[9,3,15,20,7]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：省略末尾 null 的层序数组。",
    "constraints": "两遍历合法，节点值互异。树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "{\"preorder\":[3,9,20,15,7],\"inorder\":[9,3,15,20,7]}",
        "expected": "[3,9,20,null,null,15,7]"
      },
      {
        "input": "{\"preorder\":[],\"inorder\":[]}",
        "expected": "[]"
      },
      {
        "input": "{\"preorder\":[1,2],\"inorder\":[2,1]}",
        "expected": "[1,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\npreorder,inorder=data['preorder'],data['inorder']\npositions={x:i for i,x in enumerate(inorder)}\nindex=[0]\ndef build(left,right):\n    if left>right: return None\n    value=preorder[index[0]]\n    index[0]+=1\n    mid=positions[value]\n    return TreeNode(value,build(left,mid-1),build(mid+1,right))\nanswer=tree_values(build(0,len(inorder)-1))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "前序确定根，中序确定左右子树范围；哈希表快速定位根。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 105,
    "title": "从前序与中序遍历序列构造二叉树",
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "统计树中沿父到子的连续非空路径，其节点值之和等于 target。路径可以从任意节点开始。",
    "input": "一行 JSON：{\"tree\":[10,5,-3,3,2,null,11,3,-2,null,1],\"target\":8}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "{\"tree\":[10,5,-3,3,2,null,11,3,-2,null,1],\"target\":8}",
        "expected": "3"
      },
      {
        "input": "{\"tree\":[],\"target\":0}",
        "expected": "0"
      },
      {
        "input": "{\"tree\":[0,0,0],\"target\":0}",
        "expected": "5"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncounts={0:1}\ntarget=data['target']\ndef visit(node,total):\n    if not node: return 0\n    total+=node.val\n    result=counts.get(total-target,0)\n    counts[total]=counts.get(total,0)+1\n    result+=visit(node.left,total)+visit(node.right,total)\n    counts[total]-=1\n    return result\nanswer=visit(build_tree(data['tree']),0)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "根路径前缀和配合回溯计数。离开分支时撤销当前前缀。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 437,
    "title": "路径总和 III",
    "slug": "path-sum-iii",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "在二叉树中找到节点 p 与 q 的最近公共祖先。节点值互不相同，p、q 均存在，可以相同。",
    "input": "一行 JSON：{\"tree\":[3,5,1,6,2,0,8,null,null,7,4],\"p\":5,\"q\":1}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：祖先节点值。",
    "constraints": "树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "{\"tree\":[3,5,1,6,2,0,8,null,null,7,4],\"p\":5,\"q\":1}",
        "expected": "3"
      },
      {
        "input": "{\"tree\":[3,5,1,6,2,0,8,null,null,7,4],\"p\":5,\"q\":4}",
        "expected": "5"
      },
      {
        "input": "{\"tree\":[1],\"p\":1,\"q\":1}",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndef lca(node):\n    if node is None or node.val in (data['p'],data['q']): return node\n    left,right=lca(node.left),lca(node.right)\n    return node if left and right else left or right\nanswer=lca(build_tree(data['tree'])).val\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "两侧各发现目标则当前节点为祖先，否则向上返回发现目标的一侧。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 236,
    "title": "二叉树的最近公共祖先",
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "difficulty": "中等",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "求树中任意非空简单路径的最大节点值之和。路径可以连接一个节点的左右两侧，但不能重复经过节点。",
    "input": "一行 JSON：[-10,9,20,null,null,15,7]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "树非空。树以层序数组表示，null 为空子节点；按队列只对非空节点分配两个孩子；末尾 null 可省略。节点数 ≤2000。",
    "cases": [
      {
        "input": "[-10,9,20,null,null,15,7]",
        "expected": "42"
      },
      {
        "input": "[1,2,3]",
        "expected": "6"
      },
      {
        "input": "[-3]",
        "expected": "-3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nbest=[float('-inf')]\ndef gain(node):\n    if node is None: return 0\n    left,right=max(0,gain(node.left)),max(0,gain(node.right))\n    best[0]=max(best[0],node.val+left+right)\n    return node.val+max(left,right)\ngain(build_tree(data))\nanswer=best[0]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "向父节点只能返回单侧贡献；更新全局答案时可以同时使用两侧。",
    "complexity": "时间 O(n) · 空间 O(h)",
    "id": 124,
    "title": "二叉树中的最大路径和",
    "slug": "binary-tree-maximum-path-sum",
    "difficulty": "困难",
    "tag": "二叉树",
    "hot100": true
  },
  {
    "description": "由字符 0 和 1 组成的网格中，四方向相连的 1 属于同一座岛屿。求岛屿数量。",
    "input": "一行 JSON：[\"11000\",\"11000\",\"00100\",\"00011\"]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "行列数 ≤100；每行等长，只含 0/1 字符，可为空。",
    "cases": [
      {
        "input": "[\"11000\",\"11000\",\"00100\",\"00011\"]",
        "expected": "3"
      },
      {
        "input": "[]",
        "expected": "0"
      },
      {
        "input": "[\"111\",\"111\"]",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=[list(row) for row in data]\nm,n=len(a),len(a[0]) if a else 0\nanswer=0\nfor i in range(m):\n    for j in range(n):\n        if a[i][j]!='1': continue\n        answer+=1\n        stack=[(i,j)]\n        a[i][j]='0'\n        while stack:\n            x,y=stack.pop()\n            for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):\n                r,c=x+dx,y+dy\n                if 0<=r<m and 0<=c<n and a[r][c]=='1':\n                    a[r][c]='0'\n                    stack.append((r,c))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "找到新岛屿后用 DFS 标记整片连通区域。",
    "complexity": "时间 O(mn) · 空间 O(mn)",
    "id": 200,
    "title": "岛屿数量",
    "slug": "number-of-islands",
    "difficulty": "中等",
    "tag": "图论",
    "hot100": true
  },
  {
    "description": "网格中 0 为空、1 为新鲜橘子、2 为腐烂橘子。每分钟腐烂会传播到四邻的新鲜橘子。求全部腐烂所需时间；无法全部腐烂返回 -1。",
    "input": "一行 JSON：[[2,1,1],[1,1,0],[0,1,1]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数分钟。",
    "constraints": "矩阵非空，行列数 ≤100，元素为 0/1/2。",
    "cases": [
      {
        "input": "[[2,1,1],[1,1,0],[0,1,1]]",
        "expected": "4"
      },
      {
        "input": "[[2,1,1],[0,1,1],[1,0,1]]",
        "expected": "-1"
      },
      {
        "input": "[[0,2]]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=data\nm,n=len(a),len(a[0])\nqueue=deque((i,j) for i in range(m) for j in range(n) if a[i][j]==2)\nfresh=sum(row.count(1) for row in a)\nminutes=0\nwhile queue and fresh:\n    for _ in range(len(queue)):\n        x,y=queue.popleft()\n        for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):\n            r,c=x+dx,y+dy\n            if 0<=r<m and 0<=c<n and a[r][c]==1:\n                a[r][c]=2\n                fresh-=1\n                queue.append((r,c))\n    minutes+=1\nanswer=minutes if fresh==0 else -1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "多源 BFS：所有初始腐烂橘子一起入队，一轮代表一分钟。",
    "complexity": "时间 O(mn) · 空间 O(mn)",
    "id": 994,
    "title": "腐烂的橘子",
    "slug": "rotting-oranges",
    "difficulty": "中等",
    "tag": "图论",
    "hot100": true
  },
  {
    "description": "有 n 门课程，prerequisites 中 [a,b] 表示学习 a 前必须学 b。判断是否能完成全部课程。",
    "input": "一行 JSON：{\"n\":2,\"prerequisites\":[[1,0]]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "0 ≤ n ≤2000；课程编号 0..n-1；边数 ≤10000。",
    "cases": [
      {
        "input": "{\"n\":2,\"prerequisites\":[[1,0]]}",
        "expected": "true"
      },
      {
        "input": "{\"n\":2,\"prerequisites\":[[1,0],[0,1]]}",
        "expected": "false"
      },
      {
        "input": "{\"n\":3,\"prerequisites\":[]}",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nn=data['n']\nedges=[[] for _ in range(n)]\ndegree=[0]*n\nfor a,b in data['prerequisites']:\n    edges[b].append(a)\n    degree[a]+=1\nqueue=deque(i for i in range(n) if degree[i]==0)\ndone=0\nwhile queue:\n    node=queue.popleft()\n    done+=1\n    for child in edges[node]:\n        degree[child]-=1\n        if degree[child]==0: queue.append(child)\nanswer=done==n\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "拓扑排序。无法取出的节点处于依赖环中。",
    "complexity": "时间 O(V+E) · 空间 O(V+E)",
    "id": 207,
    "title": "课程表",
    "slug": "course-schedule",
    "difficulty": "中等",
    "tag": "图论",
    "hot100": true
  },
  {
    "description": "实现前缀树。insert 插入单词；search 判断完整单词是否存在；startsWith 判断是否存在以给定前缀开头的单词。",
    "input": "一行 JSON：[[\"insert\",\"apple\"],[\"search\",\"apple\"],[\"startsWith\",\"app\"]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：操作结果数组，insert 返回 null。",
    "constraints": "操作数 ≤2000；单词为非空小写字母串，长度 ≤100。",
    "cases": [
      {
        "input": "[[\"insert\",\"apple\"],[\"search\",\"apple\"],[\"search\",\"app\"],[\"startsWith\",\"app\"],[\"insert\",\"app\"],[\"search\",\"app\"]]",
        "expected": "[null,true,false,true,null,true]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[[\"search\",\"a\"],[\"insert\",\"a\"],[\"startsWith\",\"a\"]]",
        "expected": "[false,null,true]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nroot,answer={},[]\nfor op,word in data:\n    node=root\n    if op=='insert':\n        for c in word: node=node.setdefault(c,{})\n        node['#']=True\n        answer.append(None)\n    else:\n        for c in word:\n            node=node.get(c)\n            if node is None: break\n        answer.append(node is not None and (op=='startsWith' or '#' in node))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每个字符对应一条边，额外标记完整单词结束。",
    "complexity": "单次操作 O(词长) · 空间 O(总字符数)",
    "id": 208,
    "title": "实现 Trie (前缀树)",
    "slug": "implement-trie-prefix-tree",
    "difficulty": "中等",
    "tag": "图论",
    "hot100": true
  },
  {
    "description": "给出互不相同的整数，返回所有排列。排列列表按字典序排列。空数组有一个空排列。",
    "input": "一行 JSON：[1,2,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维整数数组。",
    "constraints": "0 ≤ n ≤8，数值互不相同。",
    "cases": [
      {
        "input": "[1,2]",
        "expected": "[[1,2],[2,1]]"
      },
      {
        "input": "[]",
        "expected": "[[]]"
      },
      {
        "input": "[3]",
        "expected": "[[3]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=sorted(data)\nanswer,path,used=[],[],[False]*len(a)\ndef visit():\n    if len(path)==len(a):\n        answer.append(path.copy()); return\n    for i,x in enumerate(a):\n        if not used[i]:\n            used[i]=True; path.append(x)\n            visit()\n            path.pop(); used[i]=False\nvisit()\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "回溯枚举尚未使用的数，每次撤销选择。",
    "complexity": "时间 O(n·n!) · 空间 O(n)，不计输出",
    "id": 46,
    "title": "全排列",
    "slug": "permutations",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "返回整数数组的所有子集，元素互不相同。每个子集内部升序，所有子集按字典序排列。",
    "input": "一行 JSON：[1,2,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维整数数组。",
    "constraints": "0 ≤ n ≤15，元素互不相同。",
    "cases": [
      {
        "input": "[1,2]",
        "expected": "[[],[1],[1,2],[2]]"
      },
      {
        "input": "[]",
        "expected": "[[]]"
      },
      {
        "input": "[0]",
        "expected": "[[],[0]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer=[[]]\nfor x in sorted(data):\n    answer += [subset+[x] for subset in answer]\nanswer.sort()\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每加入一个数，把已有子集复制一遍并添加该数。",
    "complexity": "时间 O(n·2^n) · 空间 O(n·2^n)",
    "id": 78,
    "title": "子集",
    "slug": "subsets",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "按电话按键 2..9 的字母映射，枚举输入数字串对应的所有字母串，结果按字典序排序。空串返回空数组。",
    "input": "一行 JSON：\"23\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：字符串数组。",
    "constraints": "数字串长度 ≤6，仅含 2..9。",
    "cases": [
      {
        "input": "\"23\"",
        "expected": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "input": "\"\"",
        "expected": "[]"
      },
      {
        "input": "\"2\"",
        "expected": "[\"a\",\"b\",\"c\"]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nmapping={'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}\nanswer=[''] if data else []\nfor digit in data:\n    answer=[prefix+c for prefix in answer for c in mapping[digit]]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "逐位扩展已有字符串的所有可能字母。",
    "complexity": "时间 O(n·4^n) · 空间 O(n·4^n)",
    "id": 17,
    "title": "电话号码的字母组合",
    "slug": "letter-combinations-of-a-phone-number",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "从互异正整数 candidates 中选数，使总和为 target。每种数可以重复选择。每组内部升序，结果按字典序排序。",
    "input": "一行 JSON：{\"candidates\":[2,3,6,7],\"target\":7}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维整数数组。",
    "constraints": "候选数互异且为正，最多 15 个；0 ≤ target ≤40。",
    "cases": [
      {
        "input": "{\"candidates\":[2,3,6,7],\"target\":7}",
        "expected": "[[2,2,3],[7]]"
      },
      {
        "input": "{\"candidates\":[2],\"target\":1}",
        "expected": "[]"
      },
      {
        "input": "{\"candidates\":[2,3],\"target\":0}",
        "expected": "[[]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=sorted(data['candidates'])\nanswer,path=[],[]\ndef visit(start,remain):\n    if remain==0:\n        answer.append(path.copy()); return\n    for i in range(start,len(a)):\n        if a[i]>remain: break\n        path.append(a[i]); visit(i,remain-a[i]); path.pop()\nvisit(0,data['target'])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "固定非递减选择顺序来避免重复，同一个候选值可以继续使用。",
    "complexity": "时间取决于解数量（指数级） · 递归空间 O(target/min(candidates))",
    "id": 39,
    "title": "组合总和",
    "slug": "combination-sum",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "生成由 n 对括号组成的所有合法括号串，按字典序排列。n=0 时输出一个空字符串。",
    "input": "一行 JSON：3。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：字符串数组。",
    "constraints": "0 ≤ n ≤8。",
    "cases": [
      {
        "input": "3",
        "expected": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      },
      {
        "input": "0",
        "expected": "[\"\"]"
      },
      {
        "input": "1",
        "expected": "[\"()\"]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer=[]\ndef visit(s,left,right):\n    if len(s)==2*data:\n        answer.append(s); return\n    if left<data: visit(s+'(',left+1,right)\n    if right<left: visit(s+')',left,right+1)\nvisit('',0,0)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "已放右括号数不能大于左括号数，左右数量都不能超过 n。",
    "complexity": "时间 O(n·Catalan(n)) · 递归空间 O(n)",
    "id": 22,
    "title": "括号生成",
    "slug": "generate-parentheses",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "在字符网格中沿四个方向相邻移动，判断能否依次拼出 word。一次路径中不能重复使用一个格子。",
    "input": "一行 JSON：{\"board\":[\"ABCE\",\"SFCS\",\"ADEE\"],\"word\":\"ABCCED\"}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "网格尺寸 ≤6×6；word 非空，长度 ≤15。",
    "cases": [
      {
        "input": "{\"board\":[\"ABCE\",\"SFCS\",\"ADEE\"],\"word\":\"ABCCED\"}",
        "expected": "true"
      },
      {
        "input": "{\"board\":[\"ABCE\",\"SFCS\",\"ADEE\"],\"word\":\"ABCB\"}",
        "expected": "false"
      },
      {
        "input": "{\"board\":[\"a\"],\"word\":\"a\"}",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=[list(row) for row in data['board']]\nword=data['word']; m,n=len(a),len(a[0]) if a else 0\ndef visit(i,j,k):\n    if not (0<=i<m and 0<=j<n) or a[i][j]!=word[k]: return False\n    if k==len(word)-1: return True\n    c=a[i][j]; a[i][j]=None\n    found=any(visit(i+dx,j+dy,k+1) for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)))\n    a[i][j]=c\n    return found\nanswer=any(visit(i,j,0) for i in range(m) for j in range(n))\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "回溯时临时标记当前格子，离开后恢复。",
    "complexity": "最坏时间 O(mn·3^L) · 空间 O(L)",
    "id": 79,
    "title": "单词搜索",
    "slug": "word-search",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "将字符串切分成若干非空回文片段，枚举所有切分方式。结果按片段数组的字典序排列。空串有一个空切分。",
    "input": "一行 JSON：\"aab\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维字符串数组。",
    "constraints": "小写字母串，长度 ≤15。",
    "cases": [
      {
        "input": "\"aab\"",
        "expected": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
      },
      {
        "input": "\"a\"",
        "expected": "[[\"a\"]]"
      },
      {
        "input": "\"\"",
        "expected": "[[]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer,path=[],[]\ndef visit(start):\n    if start==len(data):\n        answer.append(path.copy()); return\n    for end in range(start+1,len(data)+1):\n        part=data[start:end]\n        if part==part[::-1]:\n            path.append(part); visit(end); path.pop()\nvisit(0)\nanswer.sort()\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "枚举下一片段的终点，仅对回文片段继续递归。",
    "complexity": "最坏时间 O(n²·2^n) · 空间 O(n)，不计输出",
    "id": 131,
    "title": "分割回文串",
    "slug": "palindrome-partitioning",
    "difficulty": "中等",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "在 n×n 棋盘放置 n 个皇后，任意两个不能同行、同列或同对角线。每个方案以 n 行字符串表示，Q 为皇后、. 为空。结果按棋盘行数组的字典序排列。",
    "input": "一行 JSON：4。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：三维数组（棋盘方案列表）。",
    "constraints": "1 ≤ n ≤9。",
    "cases": [
      {
        "input": "4",
        "expected": "[[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"],[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"]]"
      },
      {
        "input": "1",
        "expected": "[[\"Q\"]]"
      },
      {
        "input": "2",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nn=data; answer=[]\ncols,diag1,diag2=set(),set(),set()\npositions=[]\ndef visit(row):\n    if row==n:\n        answer.append(['.'*c+'Q'+'.'*(n-c-1) for c in positions]); return\n    for col in range(n):\n        if col in cols or row-col in diag1 or row+col in diag2: continue\n        cols.add(col); diag1.add(row-col); diag2.add(row+col); positions.append(col)\n        visit(row+1)\n        positions.pop(); cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)\nvisit(0)\nanswer.sort()\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "逐行放置，使用列和两类对角线集合剪枝。",
    "complexity": "最坏时间 O(n!·n) · 递归空间 O(n)",
    "id": 51,
    "title": "N 皇后",
    "slug": "n-queens",
    "difficulty": "困难",
    "tag": "回溯",
    "hot100": true
  },
  {
    "description": "在严格递增数组中找到 target 的下标，不存在时返回保持升序所需的插入位置。",
    "input": "一行 JSON：{\"nums\":[1,3,5,6],\"target\":5}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "{\"nums\":[1,3,5,6],\"target\":5}",
        "expected": "2"
      },
      {
        "input": "{\"nums\":[1,3,5,6],\"target\":2}",
        "expected": "1"
      },
      {
        "input": "{\"nums\":[],\"target\":1}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer=bisect_left(data['nums'],data['target'])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "寻找第一个大于等于目标的元素位置。",
    "complexity": "时间 O(log n) · 空间 O(1)",
    "id": 35,
    "title": "搜索插入位置",
    "slug": "search-insert-position",
    "difficulty": "简单",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "description": "矩阵每行升序，且每行首元素大于前一行末元素。判断 target 是否存在。",
    "input": "一行 JSON：{\"matrix\":[[1,3,5],[7,9,11]],\"target\":9}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "行列数 ≤200；矩阵可为空。",
    "cases": [
      {
        "input": "{\"matrix\":[[1,3,5],[7,9,11]],\"target\":9}",
        "expected": "true"
      },
      {
        "input": "{\"matrix\":[[1,3,5],[7,9,11]],\"target\":4}",
        "expected": "false"
      },
      {
        "input": "{\"matrix\":[],\"target\":1}",
        "expected": "false"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,target=data['matrix'],data['target']\nn=len(a[0]) if a else 0\nleft,right=0,len(a)*n-1\nanswer=False\nwhile left<=right:\n    mid=(left+right)//2\n    value=a[mid//n][mid%n]\n    if value==target:\n        answer=True; break\n    if value<target: left=mid+1\n    else: right=mid-1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "把矩阵视为一维升序数组，二分后映射到行列。",
    "complexity": "时间 O(log(mn)) · 空间 O(1)",
    "id": 74,
    "title": "搜索二维矩阵",
    "slug": "search-a-2d-matrix",
    "difficulty": "中等",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "description": "在非递减数组中返回 target 第一次和最后一次出现的下标。不存在时返回 [-1,-1]。",
    "input": "一行 JSON：{\"nums\":[5,7,7,8,8,10],\"target\":8}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：两个下标的数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "{\"nums\":[5,7,7,8,8,10],\"target\":8}",
        "expected": "[3,4]"
      },
      {
        "input": "{\"nums\":[5,7,7,8,8,10],\"target\":6}",
        "expected": "[-1,-1]"
      },
      {
        "input": "{\"nums\":[],\"target\":0}",
        "expected": "[-1,-1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,t=data['nums'],data['target']\nleft=bisect_left(a,t)\nanswer=[left,bisect_right(a,t)-1] if left<len(a) and a[left]==t else [-1,-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "分别寻找左边界与第一个大于目标的位置。",
    "complexity": "时间 O(log n) · 空间 O(1)",
    "id": 34,
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "difficulty": "中等",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "description": "严格递增数组经过循环旋转后，查找 target 的下标；不存在返回 -1。",
    "input": "一行 JSON：{\"nums\":[4,5,6,7,0,1,2],\"target\":0}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组非空，元素互异，长度 ≤10000。",
    "cases": [
      {
        "input": "{\"nums\":[4,5,6,7,0,1,2],\"target\":0}",
        "expected": "4"
      },
      {
        "input": "{\"nums\":[4,5,6,7,0,1,2],\"target\":3}",
        "expected": "-1"
      },
      {
        "input": "{\"nums\":[1],\"target\":1}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,t=data['nums'],data['target']\nleft,right,answer=0,len(a)-1,-1\nwhile left<=right:\n    mid=(left+right)//2\n    if a[mid]==t: answer=mid; break\n    if a[left]<=a[mid]:\n        if a[left]<=t<a[mid]: right=mid-1\n        else: left=mid+1\n    else:\n        if a[mid]<t<=a[right]: left=mid+1\n        else: right=mid-1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每次至少有一半有序，判断目标是否位于那一半。",
    "complexity": "时间 O(log n) · 空间 O(1)",
    "id": 33,
    "title": "搜索旋转排序数组",
    "slug": "search-in-rotated-sorted-array",
    "difficulty": "中等",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "description": "严格递增数组经过循环旋转后，返回最小值。",
    "input": "一行 JSON：[3,4,5,1,2]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组非空，元素互异，长度 ≤10000。",
    "cases": [
      {
        "input": "[3,4,5,1,2]",
        "expected": "1"
      },
      {
        "input": "[1]",
        "expected": "1"
      },
      {
        "input": "[4,5,6,7,0,1,2]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nleft,right=0,len(data)-1\nwhile left<right:\n    mid=(left+right)//2\n    if data[mid]>data[right]: left=mid+1\n    else: right=mid\nanswer=data[left]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "与右端点比较，确定旋转分界点所在的一半。",
    "complexity": "时间 O(log n) · 空间 O(1)",
    "id": 153,
    "title": "寻找旋转排序数组中的最小值",
    "slug": "find-minimum-in-rotated-sorted-array",
    "difficulty": "中等",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "description": "给定两个非递减数组，返回合并后整体的中位数。总长度为偶数时，取中间两数的平均值。",
    "input": "一行 JSON：{\"a\":[1,3],\"b\":[2]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：JSON 数字。",
    "constraints": "两个数组总长度 1..10000。",
    "cases": [
      {
        "input": "{\"a\":[1,3],\"b\":[2]}",
        "expected": "2"
      },
      {
        "input": "{\"a\":[1,2],\"b\":[3,4]}",
        "expected": "2.5"
      },
      {
        "input": "{\"a\":[],\"b\":[0]}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,b=data['a'],data['b']\nif len(a)>len(b): a,b=b,a\nm,n=len(a),len(b)\nleft,right=0,m\nwhile left<=right:\n    i=(left+right)//2; j=(m+n+1)//2-i\n    al=a[i-1] if i else float('-inf')\n    ar=a[i] if i<m else float('inf')\n    bl=b[j-1] if j else float('-inf')\n    br=b[j] if j<n else float('inf')\n    if al<=br and bl<=ar:\n        answer=max(al,bl) if (m+n)%2 else (max(al,bl)+min(ar,br))/2\n        break\n    if al>br: right=i-1\n    else: left=i+1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "二分较短数组的切分点，使两边交叉有序且左半长度满足中位数位置。",
    "complexity": "时间 O(log min(m,n)) · 空间 O(1)",
    "id": 4,
    "title": "寻找两个正序数组的中位数",
    "slug": "median-of-two-sorted-arrays",
    "difficulty": "困难",
    "tag": "二分查找",
    "hot100": true
  },
  {
    "id": 20,
    "title": "有效的括号",
    "slug": "valid-parentheses",
    "difficulty": "简单",
    "tag": "栈",
    "description": "判断括号字符串能否正确匹配：类型必须一致，且后打开的括号先关闭。",
    "input": "一行仅含 ()[]{} 的字符串，可为空。",
    "output": "有效输出 true，否则输出 false。",
    "constraints": "0 ≤ 字符串长度 ≤ 100000。",
    "cases": [
      {
        "input": "()[]{}",
        "expected": "true"
      },
      {
        "input": "([)]",
        "expected": "false"
      },
      {
        "input": "",
        "expected": "true"
      }
    ],
    "hint": "左括号入栈。遇到右括号时，栈顶必须是对应的左括号。遍历结束时栈必须为空。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "js": "const s=stdin.trim(),st=[],m={')':'(',']':'[','}':'{'};let ok=true;for(const c of s){if('([{'.includes(c))st.push(c);else if(st.pop()!==m[c]){ok=false;break;}}print(ok&&st.length===0?'true':'false');",
    "py": "stack = []\npairs = {')': '(', ']': '[', '}': '{'}\nvalid = True\nfor char in raw.strip():\n    if char in '([{':\n        stack.append(char)\n    elif not stack or stack.pop() != pairs[char]:\n        valid = False\n        break\nprint('true' if valid and not stack else 'false')",
    "hot100": true
  },
  {
    "description": "实现同时支持 push、pop、top 和 getMin 的栈，每项操作均应为常数时间。保证读取和弹出时栈非空。",
    "input": "一行 JSON：[[\"push\",-2],[\"push\",0],[\"push\",-3],[\"getMin\"],[\"pop\"],[\"top\"],[\"getMin\"]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：结果数组，push/pop 返回 null。",
    "constraints": "操作数 ≤10000，操作合法。",
    "cases": [
      {
        "input": "[[\"push\",-2],[\"push\",0],[\"push\",-3],[\"getMin\"],[\"pop\"],[\"top\"],[\"getMin\"]]",
        "expected": "[null,null,null,-3,null,0,-2]"
      },
      {
        "input": "[[\"push\",1],[\"getMin\"]]",
        "expected": "[null,1]"
      },
      {
        "input": "[[\"push\",2],[\"push\",2],[\"pop\"],[\"getMin\"]]",
        "expected": "[null,null,null,2]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nstack,answer=[],[]\nfor op in data:\n    if op[0]=='push':\n        stack.append((op[1],min(op[1],stack[-1][1]) if stack else op[1])); answer.append(None)\n    elif op[0]=='pop': stack.pop(); answer.append(None)\n    elif op[0]=='top': answer.append(stack[-1][0])\n    else: answer.append(stack[-1][1])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每个栈元素同时记录压入该元素时的栈内最小值。",
    "complexity": "操作 O(1) · 空间 O(n)",
    "id": 155,
    "title": "最小栈",
    "slug": "min-stack",
    "difficulty": "中等",
    "tag": "栈",
    "hot100": true
  },
  {
    "description": "解码嵌套重复串：k[片段] 表示将片段重复 k 次，可嵌套。数字只表示重复次数。",
    "input": "一行 JSON：\"3[a2[c]]\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：解码后的字符串。",
    "constraints": "语法合法，仅含英文字母、正整数和方括号；解码长度 ≤10000。",
    "cases": [
      {
        "input": "\"3[a2[c]]\"",
        "expected": "\"accaccacc\""
      },
      {
        "input": "\"2[abc]3[cd]ef\"",
        "expected": "\"abcabccdcdcdef\""
      },
      {
        "input": "\"abc\"",
        "expected": "\"abc\""
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nstack=[]; current=''; number=0\nfor c in data:\n    if c.isdigit(): number=number*10+int(c)\n    elif c=='[':\n        stack.append((current,number)); current=''; number=0\n    elif c==']':\n        prefix,k=stack.pop(); current=prefix+current*k\n    else: current+=c\nanswer=current\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "遇左括号保存外层状态，遇右括号展开并接回外层。",
    "complexity": "时间 O(输出长度·嵌套深度) · 空间 O(输出长度+深度)",
    "id": 394,
    "title": "字符串解码",
    "slug": "decode-string",
    "difficulty": "中等",
    "tag": "栈",
    "hot100": true
  },
  {
    "description": "对每天的温度，计算需要再等待几天才会出现更高温度；之后没有更高温度则为零。",
    "input": "一行 JSON：[73,74,75,71,69,72,76,73]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[73,74,75,71,69,72,76,73]",
        "expected": "[1,1,4,2,1,1,0,0]"
      },
      {
        "input": "[]",
        "expected": "[]"
      },
      {
        "input": "[30,30,31]",
        "expected": "[2,1,0]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nstack=[]; answer=[0]*len(data)\nfor i,t in enumerate(data):\n    while stack and data[stack[-1]]<t:\n        previous=stack.pop(); answer[previous]=i-previous\n    stack.append(i)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "单调栈保存尚未等到更高温度的下标。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 739,
    "title": "每日温度",
    "slug": "daily-temperatures",
    "difficulty": "中等",
    "tag": "栈",
    "hot100": true
  },
  {
    "description": "每根柱子宽度为 1，求柱状图中能够完全覆盖在柱子内部的最大矩形面积。",
    "input": "一行 JSON：[2,1,5,6,2,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "非负高度数组，长度 ≤10000。",
    "cases": [
      {
        "input": "[2,1,5,6,2,3]",
        "expected": "10"
      },
      {
        "input": "[]",
        "expected": "0"
      },
      {
        "input": "[2,2]",
        "expected": "4"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=[0]+data+[0]\nstack=[0]; answer=0\nfor i in range(1,len(a)):\n    while a[stack[-1]]>a[i]:\n        height=a[stack.pop()]\n        answer=max(answer,height*(i-stack[-1]-1))\n    stack.append(i)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "递增栈。遇更矮柱子时，弹出柱子的左右边界都已确定。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 84,
    "title": "柱状图中最大的矩形",
    "slug": "largest-rectangle-in-histogram",
    "difficulty": "困难",
    "tag": "栈",
    "hot100": true
  },
  {
    "description": "返回数组按非递增顺序排列后的第 k 个数，重复元素分别计数。",
    "input": "一行 JSON：{\"nums\":[3,2,1,5,6,4],\"k\":2}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "1 ≤ k ≤ 数组长度 ≤10000。",
    "cases": [
      {
        "input": "{\"nums\":[3,2,1,5,6,4],\"k\":2}",
        "expected": "5"
      },
      {
        "input": "{\"nums\":[3,2,3,1,2,4,5,5,6],\"k\":4}",
        "expected": "4"
      },
      {
        "input": "{\"nums\":[1],\"k\":1}",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nheap=[]; k=data['k']\nfor x in data['nums']:\n    heappush(heap,x)\n    if len(heap)>k: heappop(heap)\nanswer=heap[0]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "维护大小为 k 的最小堆，堆顶是目前第 k 大的数。",
    "complexity": "时间 O(n log k) · 空间 O(k)",
    "id": 215,
    "title": "数组中的第K个最大元素",
    "slug": "kth-largest-element-in-an-array",
    "difficulty": "中等",
    "tag": "堆",
    "hot100": true
  },
  {
    "description": "返回出现频率最高的 k 个整数。频率相同时优先选择数值更小的数；结果按频率降序、数值升序排列。",
    "input": "一行 JSON：{\"nums\":[1,1,1,2,2,3],\"k\":2}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "1 ≤ k ≤ 不同元素数量；数组长度 ≤10000。",
    "cases": [
      {
        "input": "{\"nums\":[1,1,1,2,2,3],\"k\":2}",
        "expected": "[1,2]"
      },
      {
        "input": "{\"nums\":[4,3,4,3],\"k\":1}",
        "expected": "[3]"
      },
      {
        "input": "{\"nums\":[1],\"k\":1}",
        "expected": "[1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncounts=Counter(data['nums'])\nheap=[]\nfor value,count in counts.items(): heappush(heap,(-count,value))\nanswer=[heappop(heap)[1] for _ in range(data['k'])]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "将频率取负放入最小堆，同时用值作为相同频率时的排序键。",
    "complexity": "时间 O(n+u log u) · 空间 O(u)",
    "id": 347,
    "title": "前 K 个高频元素",
    "slug": "top-k-frequent-elements",
    "difficulty": "中等",
    "tag": "堆",
    "hot100": true
  },
  {
    "description": "依次执行 addNum 和 findMedian。新增数字计入当前数据流，中位数按排序后的中间位置计算。保证查询时已有数字。",
    "input": "一行 JSON：[[\"addNum\",1],[\"addNum\",2],[\"findMedian\"]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：操作结果数组，addNum 返回 null。",
    "constraints": "操作数 ≤10000，操作合法。",
    "cases": [
      {
        "input": "[[\"addNum\",1],[\"addNum\",2],[\"findMedian\"],[\"addNum\",3],[\"findMedian\"]]",
        "expected": "[null,null,1.5,null,2]"
      },
      {
        "input": "[[\"addNum\",0],[\"findMedian\"]]",
        "expected": "[null,0]"
      },
      {
        "input": "[[\"addNum\",-1],[\"addNum\",-2],[\"findMedian\"]]",
        "expected": "[null,null,-1.5]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nlow,high,answer=[],[],[]\nfor op in data:\n    if op[0]=='addNum':\n        heappush(low,-op[1]); heappush(high,-heappop(low))\n        if len(high)>len(low): heappush(low,-heappop(high))\n        answer.append(None)\n    else:\n        answer.append(-low[0] if len(low)>len(high) else (-low[0]+high[0])/2)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "最大堆存较小一半，最小堆存较大一半，平衡两堆的大小。",
    "complexity": "添加 O(log n)，查询 O(1) · 空间 O(n)",
    "id": 295,
    "title": "数据流的中位数",
    "slug": "find-median-from-data-stream",
    "difficulty": "困难",
    "tag": "堆",
    "hot100": true
  },
  {
    "id": 121,
    "title": "买卖股票的最佳时机",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "简单",
    "tag": "贪心算法",
    "description": "每天的股票价格已知。只允许买入一次并在之后卖出一次，求最大利润。也可以不交易。",
    "input": "第一行 n；第二行 n 个价格。",
    "output": "输出最大利润。",
    "constraints": "1 ≤ n ≤ 100000；0 ≤ price[i] ≤ 100000。",
    "cases": [
      {
        "input": "6\n7 1 5 3 6 4",
        "expected": "5"
      },
      {
        "input": "5\n7 6 4 3 1",
        "expected": "0"
      },
      {
        "input": "1\n5",
        "expected": "0"
      }
    ],
    "hint": "维护迄今为止的最低价格，计算在今天卖出的利润。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next();let low=Infinity,ans=0;for(let i=0;i<n;i++){const x=next();ans=Math.max(ans,x-low);low=Math.min(low,x);}print(ans);",
    "py": "n = int(next(tokens))\nlowest, answer = float('inf'), 0\nfor _ in range(n):\n    x = int(next(tokens))\n    lowest = min(lowest, x)\n    answer = max(answer, x - lowest)\nprint(answer)",
    "hot100": true
  },
  {
    "description": "从数组下标 0 开始，每个数表示在该位置最多可向右跳的距离。判断能否到达末尾。",
    "input": "一行 JSON：[2,3,1,1,4]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "非空非负整数数组，长度 ≤10000。",
    "cases": [
      {
        "input": "[2,3,1,1,4]",
        "expected": "true"
      },
      {
        "input": "[3,2,1,0,4]",
        "expected": "false"
      },
      {
        "input": "[0]",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nreach=0; answer=True\nfor i,x in enumerate(data):\n    if i>reach:\n        answer=False; break\n    reach=max(reach,i+x)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "维护已能到达的最远下标，遇到无法抵达的位置就失败。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 55,
    "title": "跳跃游戏",
    "slug": "jump-game",
    "difficulty": "中等",
    "tag": "贪心算法",
    "hot100": true
  },
  {
    "description": "数组元素表示最多能向右跳的距离，求从下标 0 到末尾的最少跳跃次数。保证末尾可达。",
    "input": "一行 JSON：[2,3,1,1,4]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "非空非负数组，长度 ≤10000，保证可达。",
    "cases": [
      {
        "input": "[2,3,1,1,4]",
        "expected": "2"
      },
      {
        "input": "[2,3,0,1,4]",
        "expected": "2"
      },
      {
        "input": "[0]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nend=reach=answer=0\nfor i in range(len(data)-1):\n    reach=max(reach,i+data[i])\n    if i==end:\n        answer+=1; end=reach\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "把每次跳跃能覆盖的范围看作一层，扫描到层边界时增加一次跳跃。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 45,
    "title": "跳跃游戏 II",
    "slug": "jump-game-ii",
    "difficulty": "中等",
    "tag": "贪心算法",
    "hot100": true
  },
  {
    "description": "把字符串切成尽可能多的连续片段，使同一字符只出现在一个片段中。输出各片段长度。",
    "input": "一行 JSON：\"ababcbacadefegdehijhklij\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "小写字母串，长度 ≤10000。",
    "cases": [
      {
        "input": "\"ababcbacadefegdehijhklij\"",
        "expected": "[9,7,8]"
      },
      {
        "input": "\"eccbbbbdec\"",
        "expected": "[10]"
      },
      {
        "input": "\"\"",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nlast={c:i for i,c in enumerate(data)}\nstart=end=0; answer=[]\nfor i,c in enumerate(data):\n    end=max(end,last[c])\n    if i==end:\n        answer.append(end-start+1); start=i+1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "记录每个字符的最远出现位置，片段必须覆盖已见字符的所有出现。",
    "complexity": "时间 O(n) · 空间 O(字符集大小)",
    "id": 763,
    "title": "划分字母区间",
    "slug": "partition-labels",
    "difficulty": "中等",
    "tag": "贪心算法",
    "hot100": true
  },
  {
    "id": 70,
    "title": "爬楼梯",
    "slug": "climbing-stairs",
    "difficulty": "简单",
    "tag": "动态规划",
    "description": "每次可以上 1 或 2 个台阶。求恰好爬到 n 阶的不同走法数量。",
    "input": "一行整数 n。",
    "output": "输出走法数量。",
    "constraints": "1 ≤ n ≤ 45。",
    "cases": [
      {
        "input": "2",
        "expected": "2"
      },
      {
        "input": "3",
        "expected": "3"
      },
      {
        "input": "45",
        "expected": "1836311903"
      }
    ],
    "hint": "最后一步来自 n-1 或 n-2，因此 f(n)=f(n-1)+f(n-2)。只保留两个状态。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "js": "const n=next();let a=1,b=1;for(let i=2;i<=n;i++){[a,b]=[b,a+b];}print(b);",
    "py": "n = int(next(tokens))\na, b = 1, 1\nfor _ in range(2, n + 1):\n    a, b = b, a + b\nprint(b)",
    "hot100": true
  },
  {
    "description": "生成杨辉三角的前 numRows 行，每行两端为 1，内部元素等于上一行相邻两个数之和。",
    "input": "一行 JSON：5。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：二维整数数组。",
    "constraints": "0 ≤ numRows ≤30。",
    "cases": [
      {
        "input": "5",
        "expected": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
      },
      {
        "input": "0",
        "expected": "[]"
      },
      {
        "input": "1",
        "expected": "[[1]]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer=[]\nfor i in range(data):\n    row=[1]*(i+1)\n    for j in range(1,i): row[j]=answer[-1][j-1]+answer[-1][j]\n    answer.append(row)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "逐行构造，边界单独保留为 1。",
    "complexity": "时间 O(n²) · 空间 O(n²)",
    "id": 118,
    "title": "杨辉三角",
    "slug": "pascals-triangle",
    "difficulty": "简单",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "一排房屋分别存放非负金额，不能同时选择相邻房屋。求可取得的最大金额。",
    "input": "一行 JSON：[2,7,9,3,1]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "非负整数数组，长度 ≤10000。",
    "cases": [
      {
        "input": "[2,7,9,3,1]",
        "expected": "12"
      },
      {
        "input": "[1,2,3,1]",
        "expected": "4"
      },
      {
        "input": "[]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nprevious=current=0\nfor x in data: previous,current=current,max(current,previous+x)\nanswer=current\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "当前位置取或不取，取时只能接上前两个位置的最优答案。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 198,
    "title": "打家劫舍",
    "slug": "house-robber",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "把正整数 n 表示为若干正完全平方数之和，求最少项数。",
    "input": "一行 JSON：12。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "1 ≤ n ≤10000。",
    "cases": [
      {
        "input": "12",
        "expected": "3"
      },
      {
        "input": "13",
        "expected": "2"
      },
      {
        "input": "1",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nn=data\ndp=[0]+[n+1]*n\nsquares=[i*i for i in range(1,isqrt(n)+1)]\nfor total in range(1,n+1):\n    for square in squares:\n        if square>total: break\n        dp[total]=min(dp[total],dp[total-square]+1)\nanswer=dp[n]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "完全背包，最后一项可选择任何不超过当前值的平方数。",
    "complexity": "时间 O(n√n) · 空间 O(n)",
    "id": 279,
    "title": "完全平方数",
    "slug": "perfect-squares",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "每种硬币面额可以使用任意次，求组成 amount 的最少硬币数。不能组成时返回 -1。",
    "input": "一行 JSON：{\"coins\":[1,2,5],\"amount\":11}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "硬币为互异正整数，数量 ≤100；0 ≤ amount ≤10000。",
    "cases": [
      {
        "input": "{\"coins\":[1,2,5],\"amount\":11}",
        "expected": "3"
      },
      {
        "input": "{\"coins\":[2],\"amount\":3}",
        "expected": "-1"
      },
      {
        "input": "{\"coins\":[1],\"amount\":0}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\namount=data['amount']\ndp=[0]+[amount+1]*amount\nfor total in range(1,amount+1):\n    for coin in data['coins']:\n        if coin<=total: dp[total]=min(dp[total],dp[total-coin]+1)\nanswer=dp[amount] if dp[amount]<=amount else -1\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "dp[x] 表示组成 x 的最小项数，从所有合法最后一枚硬币转移。",
    "complexity": "时间 O(amount·硬币种数) · 空间 O(amount)",
    "id": 322,
    "title": "零钱兑换",
    "slug": "coin-change",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "判断字符串 s 能否切分成若干字典单词。字典单词可以重复使用，空串可以完成拆分。",
    "input": "一行 JSON：{\"s\":\"leetcode\",\"words\":[\"leet\",\"code\"]}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "s 长度 ≤1000；字典单词非空，数量 ≤1000，单词长度 ≤30。",
    "cases": [
      {
        "input": "{\"s\":\"leetcode\",\"words\":[\"leet\",\"code\"]}",
        "expected": "true"
      },
      {
        "input": "{\"s\":\"catsandog\",\"words\":[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]}",
        "expected": "false"
      },
      {
        "input": "{\"s\":\"\",\"words\":[\"a\"]}",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ns=data['s']; words=set(data['words'])\ndp=[True]+[False]*len(s)\nmax_length=max(map(len,words),default=0)\nfor end in range(1,len(s)+1):\n    dp[end]=any(dp[start] and s[start:end] in words for start in range(max(0,end-max_length),end))\nanswer=dp[-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "前缀 DP：枚举最后一个单词的起点，已可切分前缀加字典单词即可转移。",
    "complexity": "时间 O(n·L²)，计切片成本 · 空间 O(n+字典)",
    "id": 139,
    "title": "单词拆分",
    "slug": "word-break",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "返回数组中严格递增子序列的最大长度。子序列可以跳过元素，但要保持原位置顺序。",
    "input": "一行 JSON：[10,9,2,5,3,7,101,18]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组长度不超过 2000；数值绝对值不超过 100000；输入满足题意。",
    "cases": [
      {
        "input": "[10,9,2,5,3,7,101,18]",
        "expected": "4"
      },
      {
        "input": "[]",
        "expected": "0"
      },
      {
        "input": "[7,7,7]",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ntails=[]\nfor x in data:\n    index=bisect_left(tails,x)\n    if index==len(tails): tails.append(x)\n    else: tails[index]=x\nanswer=len(tails)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "tails[i] 保存长度为 i+1 的递增子序列最小尾值，使用二分更新。",
    "complexity": "时间 O(n log n) · 空间 O(n)",
    "id": 300,
    "title": "最长递增子序列",
    "slug": "longest-increasing-subsequence",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "在非空数组中选择一段连续非空子数组，使其元素乘积最大。",
    "input": "一行 JSON：[2,3,-2,4]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "数组非空，长度 ≤2000；所有连续子数组乘积在 32 位整数范围内。",
    "cases": [
      {
        "input": "[2,3,-2,4]",
        "expected": "6"
      },
      {
        "input": "[-2,0,-1]",
        "expected": "0"
      },
      {
        "input": "[-2,3,-4]",
        "expected": "24"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nhigh=low=answer=data[0]\nfor x in data[1:]:\n    high,low=max(x,high*x,low*x),min(x,high*x,low*x)\n    answer=max(answer,high)\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "负数会交换最大与最小贡献，所以同时维护两个结尾状态。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 152,
    "title": "乘积最大子数组",
    "slug": "maximum-product-subarray",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "判断正整数数组能否分成两个子集，使它们的和相等；每个元素恰好分到一侧。",
    "input": "一行 JSON：[1,5,11,5]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：布尔值。",
    "constraints": "1 ≤ 长度 ≤200，元素为 1..100。",
    "cases": [
      {
        "input": "[1,5,11,5]",
        "expected": "true"
      },
      {
        "input": "[1,2,3,5]",
        "expected": "false"
      },
      {
        "input": "[2,2]",
        "expected": "true"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ntotal=sum(data)\nanswer=False\nif total%2==0:\n    target=total//2\n    possible=[True]+[False]*target\n    for x in data:\n        for value in range(target,x-1,-1): possible[value]=possible[value] or possible[value-x]\n    answer=possible[target]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "转化成是否存在和为总和一半的子集。倒序更新避免重复使用元素。",
    "complexity": "时间 O(n·sum(nums)) · 空间 O(sum(nums))",
    "id": 416,
    "title": "分割等和子集",
    "slug": "partition-equal-subset-sum",
    "difficulty": "中等",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "在仅含左右圆括号的字符串中，返回最长连续合法括号子串的长度。",
    "input": "一行 JSON：\")()())\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "字符串长度 ≤10000，仅含 ()。",
    "cases": [
      {
        "input": "\")()())\"",
        "expected": "4"
      },
      {
        "input": "\"(()\"",
        "expected": "2"
      },
      {
        "input": "\"\"",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nstack=[-1]; answer=0\nfor i,c in enumerate(data):\n    if c=='(': stack.append(i)\n    else:\n        stack.pop()\n        if not stack: stack.append(i)\n        else: answer=max(answer,i-stack[-1])\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "栈底保存最近一个无效边界，其余保存待匹配左括号下标。",
    "complexity": "时间 O(n) · 空间 O(n)",
    "id": 32,
    "title": "最长有效括号",
    "slug": "longest-valid-parentheses",
    "difficulty": "困难",
    "tag": "动态规划",
    "hot100": true
  },
  {
    "description": "在 m 行 n 列网格，从左上角走到右下角，每次只能向右或向下。求不同路径数。",
    "input": "一行 JSON：{\"m\":3,\"n\":7}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "1 ≤ m,n ≤100。",
    "cases": [
      {
        "input": "{\"m\":3,\"n\":7}",
        "expected": "28"
      },
      {
        "input": "{\"m\":1,\"n\":1}",
        "expected": "1"
      },
      {
        "input": "{\"m\":3,\"n\":2}",
        "expected": "3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nm,n=data['m'],data['n']\ndp=[1]*n\nfor _ in range(1,m):\n    for j in range(1,n): dp[j]+=dp[j-1]\nanswer=dp[-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "每格路径数等于上方与左方之和，使用一维滚动数组。",
    "complexity": "时间 O(mn) · 空间 O(n)",
    "id": 62,
    "title": "不同路径",
    "slug": "unique-paths",
    "difficulty": "中等",
    "tag": "多维动态规划",
    "hot100": true
  },
  {
    "description": "在非负整数网格中从左上角走到右下角，每步只能向右或向下，求所经过数字总和的最小值。",
    "input": "一行 JSON：[[1,3,1],[1,5,1],[4,2,1]]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "矩阵非空，行列数 ≤100，元素非负。",
    "cases": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "expected": "7"
      },
      {
        "input": "[[1,2,3]]",
        "expected": "6"
      },
      {
        "input": "[[0]]",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ndp=[float('inf')]*len(data[0]); dp[0]=0\nfor row in data:\n    for j,x in enumerate(row): dp[j]=x+min(dp[j],dp[j-1] if j else float('inf'))\nanswer=dp[-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "当前位置只可能从上或左转移，先取较小路径代价。",
    "complexity": "时间 O(mn) · 空间 O(n)",
    "id": 64,
    "title": "最小路径和",
    "slug": "minimum-path-sum",
    "difficulty": "中等",
    "tag": "多维动态规划",
    "hot100": true
  },
  {
    "description": "返回字符串的最长连续回文片段。若最长片段有多个，返回起点最早的。空串返回空串。",
    "input": "一行 JSON：\"babad\"。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：字符串。",
    "constraints": "英文字母和数字字符串，长度 ≤2000。",
    "cases": [
      {
        "input": "\"babad\"",
        "expected": "\"bab\""
      },
      {
        "input": "\"cbbd\"",
        "expected": "\"bb\""
      },
      {
        "input": "\"\"",
        "expected": "\"\""
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nstart,best=0,0\nfor center in range(len(data)):\n    for left,right in ((center,center),(center,center+1)):\n        while left>=0 and right<len(data) and data[left]==data[right]:\n            length=right-left+1\n            if length>best or (length==best and left<start): start,best=left,length\n            left-=1; right+=1\nanswer=data[start:start+best]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "分别从单字符中心和双字符中心向两边扩展。",
    "complexity": "时间 O(n²) · 空间 O(1)",
    "id": 5,
    "title": "最长回文子串",
    "slug": "longest-palindromic-substring",
    "difficulty": "中等",
    "tag": "多维动态规划",
    "hot100": true
  },
  {
    "description": "返回两个字符串的最长公共子序列长度。子序列允许跳过字符，但保留相对顺序。",
    "input": "一行 JSON：{\"a\":\"abcde\",\"b\":\"ace\"}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "字符串仅含小写字母，长度 ≤1000。",
    "cases": [
      {
        "input": "{\"a\":\"abcde\",\"b\":\"ace\"}",
        "expected": "3"
      },
      {
        "input": "{\"a\":\"abc\",\"b\":\"def\"}",
        "expected": "0"
      },
      {
        "input": "{\"a\":\"\",\"b\":\"a\"}",
        "expected": "0"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,b=data['a'],data['b']\ndp=[0]*(len(b)+1)\nfor x in a:\n    diagonal=0\n    for j,y in enumerate(b,1):\n        old=dp[j]\n        dp[j]=diagonal+1 if x==y else max(dp[j],dp[j-1])\n        diagonal=old\nanswer=dp[-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "相同字符接上左上状态，否则取去掉任一末尾字符的较优状态。",
    "complexity": "时间 O(mn) · 空间 O(n)",
    "id": 1143,
    "title": "最长公共子序列",
    "slug": "longest-common-subsequence",
    "difficulty": "中等",
    "tag": "多维动态规划",
    "hot100": true
  },
  {
    "description": "将字符串 a 变成 b，每次可以插入、删除或替换一个字符。求最少操作数。",
    "input": "一行 JSON：{\"a\":\"horse\",\"b\":\"ros\"}。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "字符串仅含小写字母，长度 ≤1000。",
    "cases": [
      {
        "input": "{\"a\":\"horse\",\"b\":\"ros\"}",
        "expected": "3"
      },
      {
        "input": "{\"a\":\"intention\",\"b\":\"execution\"}",
        "expected": "5"
      },
      {
        "input": "{\"a\":\"\",\"b\":\"abc\"}",
        "expected": "3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na,b=data['a'],data['b']\ndp=list(range(len(b)+1))\nfor i,x in enumerate(a,1):\n    diagonal=dp[0]; dp[0]=i\n    for j,y in enumerate(b,1):\n        old=dp[j]\n        dp[j]=diagonal if x==y else 1+min(diagonal,dp[j],dp[j-1])\n        diagonal=old\nanswer=dp[-1]\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "末尾字符相同无需操作，否则从替换、删除、插入中选最少次数。",
    "complexity": "时间 O(mn) · 空间 O(n)",
    "id": 72,
    "title": "编辑距离",
    "slug": "edit-distance",
    "difficulty": "中等",
    "tag": "多维动态规划",
    "hot100": true
  },
  {
    "description": "数组中恰有一个元素只出现一次，其余每个元素出现两次。返回只出现一次的数。",
    "input": "一行 JSON：[4,1,2,1,2]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "非空整数数组，长度 ≤10000，出现次数满足题意。",
    "cases": [
      {
        "input": "[4,1,2,1,2]",
        "expected": "4"
      },
      {
        "input": "[2,2,1]",
        "expected": "1"
      },
      {
        "input": "[-3]",
        "expected": "-3"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nanswer=0\nfor x in data: answer ^= x\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "相同数字异或为零，异或的交换律可消去全部成对元素。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 136,
    "title": "只出现一次的数字",
    "slug": "single-number",
    "difficulty": "简单",
    "tag": "技巧",
    "hot100": true
  },
  {
    "description": "数组中保证存在一个数，其出现次数严格超过数组长度的一半。返回这个数。",
    "input": "一行 JSON：[2,2,1,1,1,2,2]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "非空数组，长度 ≤10000，保证多数元素存在。",
    "cases": [
      {
        "input": "[2,2,1,1,1,2,2]",
        "expected": "2"
      },
      {
        "input": "[3,2,3]",
        "expected": "3"
      },
      {
        "input": "[1]",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\ncandidate=count=0\nfor x in data:\n    if count==0: candidate=x\n    count += 1 if x==candidate else -1\nanswer=candidate\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "不同元素成对抵消后，多数元素必然剩余。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 169,
    "title": "多数元素",
    "slug": "majority-element",
    "difficulty": "简单",
    "tag": "技巧",
    "hot100": true
  },
  {
    "description": "数组只含 0、1、2，原地将其非递减排列。",
    "input": "一行 JSON：[2,0,2,1,1,0]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "长度 ≤10000，仅含 0/1/2。",
    "cases": [
      {
        "input": "[2,0,2,1,1,0]",
        "expected": "[0,0,1,1,2,2]"
      },
      {
        "input": "[2,0,1]",
        "expected": "[0,1,2]"
      },
      {
        "input": "[]",
        "expected": "[]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nleft=i=0; right=len(data)-1\nwhile i<=right:\n    if data[i]==0:\n        data[i],data[left]=data[left],data[i]; left+=1; i+=1\n    elif data[i]==2:\n        data[i],data[right]=data[right],data[i]; right-=1\n    else: i+=1\nanswer=data\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "三路划分。换来右端元素时尚未检查它，不应增加当前指针。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 75,
    "title": "颜色分类",
    "slug": "sort-colors",
    "difficulty": "中等",
    "tag": "技巧",
    "hot100": true
  },
  {
    "description": "把数组变为按字典序紧接其后的排列；如果已经最大，返回最小排列。允许重复元素。",
    "input": "一行 JSON：[1,2,3]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数数组。",
    "constraints": "非空整数数组，长度 ≤10000。",
    "cases": [
      {
        "input": "[1,2,3]",
        "expected": "[1,3,2]"
      },
      {
        "input": "[3,2,1]",
        "expected": "[1,2,3]"
      },
      {
        "input": "[1,1,5]",
        "expected": "[1,5,1]"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\na=data; i=len(a)-2\nwhile i>=0 and a[i]>=a[i+1]: i-=1\nif i>=0:\n    j=len(a)-1\n    while a[j]<=a[i]: j-=1\n    a[i],a[j]=a[j],a[i]\nleft,right=i+1,len(a)-1\nwhile left<right:\n    a[left],a[right]=a[right],a[left]; left+=1; right-=1\nanswer=a\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "从右向左找可增大的位置，与右侧最小更大值交换，再反转后缀。",
    "complexity": "时间 O(n) · 额外空间 O(1)",
    "id": 31,
    "title": "下一个排列",
    "slug": "next-permutation",
    "difficulty": "中等",
    "tag": "技巧",
    "hot100": true
  },
  {
    "description": "长度为 n+1 的数组中元素均为 1..n，只有一种数重复（可能重复多次）。不修改数组，找出重复数。",
    "input": "一行 JSON：[1,3,4,2,2]。使用 json.loads(sys.stdin.read()) 解析。",
    "output": "输出一行 JSON：整数。",
    "constraints": "2 ≤ 数组长度 ≤10000，数值和重复条件满足题意。",
    "cases": [
      {
        "input": "[1,3,4,2,2]",
        "expected": "2"
      },
      {
        "input": "[3,1,3,4,2]",
        "expected": "3"
      },
      {
        "input": "[1,1]",
        "expected": "1"
      }
    ],
    "outputFormat": "json",
    "py": "data = json.loads(raw)\nslow=fast=data[0]\nwhile True:\n    slow=data[slow]; fast=data[data[fast]]\n    if slow==fast: break\nfinder=data[0]\nwhile finder!=slow:\n    finder=data[finder]; slow=data[slow]\nanswer=finder\nprint(json.dumps(answer, ensure_ascii=False))",
    "hint": "将下标到数组值看作 next 指针，重复值是这个隐式链表的环入口。",
    "complexity": "时间 O(n) · 空间 O(1)",
    "id": 287,
    "title": "寻找重复数",
    "slug": "find-the-duplicate-number",
    "difficulty": "中等",
    "tag": "技巧",
    "hot100": true
  },
  {
    "id": 704,
    "title": "二分查找",
    "slug": "binary-search",
    "difficulty": "简单",
    "tag": "二分查找",
    "description": "在严格递增的整数数组中查找目标值，返回下标。不存在时返回 -1。",
    "input": "第一行 n 和 target；第二行 n 个严格递增的整数。",
    "output": "输出目标下标，从 0 开始；不存在输出 -1。",
    "constraints": "1 ≤ n ≤ 100000；整数绝对值不超过 1000000000。",
    "cases": [
      {
        "input": "6 9\n-1 0 3 5 9 12",
        "expected": "4"
      },
      {
        "input": "6 2\n-1 0 3 5 9 12",
        "expected": "-1"
      },
      {
        "input": "1 5\n5",
        "expected": "0"
      }
    ],
    "hint": "维护闭区间 [l,r]。中点较小时排除左半边，中点较大时排除右半边。",
    "complexity": "时间 O(log n) · 空间 O(1)",
    "js": "const n=next(),t=next(),a=Array.from({length:n},next);let l=0,r=n-1,ans=-1;while(l<=r){const m=Math.floor((l+r)/2);if(a[m]===t){ans=m;break;}if(a[m]<t)l=m+1;else r=m-1;}print(ans);",
    "py": "n, target = int(next(tokens)), int(next(tokens))\na = [int(next(tokens)) for _ in range(n)]\nleft, right, answer = 0, n - 1, -1\nwhile left <= right:\n    mid = (left + right) // 2\n    if a[mid] == target:\n        answer = mid\n        break\n    if a[mid] < target:\n        left = mid + 1\n    else:\n        right = mid - 1\nprint(answer)",
    "hot100": false
  }
];
const PYTHON_SUPPORT = "import json\nfrom collections import Counter, deque, OrderedDict\nfrom heapq import heappush, heappop\nfrom bisect import bisect_left, bisect_right\nfrom functools import lru_cache\nfrom math import isqrt\n\nsys.setrecursionlimit(100000)\n\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val, self.next = val, next\n        self.random = None\n\ndef build_list(values):\n    dummy = tail = ListNode()\n    for value in values:\n        tail.next = ListNode(value)\n        tail = tail.next\n    return dummy.next\n\ndef list_values(node):\n    values = []\n    while node:\n        values.append(node.val)\n        node = node.next\n    return values\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\ndef build_tree(values):\n    if not values or values[0] is None:\n        return None\n    root = TreeNode(values[0])\n    queue, index = deque([root]), 1\n    while queue and index < len(values):\n        node = queue.popleft()\n        for side in ('left', 'right'):\n            if index < len(values) and values[index] is not None:\n                child = TreeNode(values[index])\n                setattr(node, side, child)\n                queue.append(child)\n            index += 1\n    return root\n\ndef tree_values(root):\n    if root is None:\n        return []\n    queue, values = deque([root]), []\n    while queue:\n        node = queue.popleft()\n        values.append(node.val if node else None)\n        if node:\n            queue.extend((node.left, node.right))\n    while values and values[-1] is None:\n        values.pop()\n    return values\n";

export function codeFor(problem,language,solution=false){
 if(language==='py'){
  const common=PYTHON_SUPPORT.slice(0,PYTHON_SUPPORT.indexOf('class ListNode:'));
  const linked=PYTHON_SUPPORT.slice(PYTHON_SUPPORT.indexOf('class ListNode:'),PYTHON_SUPPORT.indexOf('class TreeNode:'));
  const tree=PYTHON_SUPPORT.slice(PYTHON_SUPPORT.indexOf('class TreeNode:'));
  const support=problem.outputFormat==='json'?common:'';
  const structures=problem.outputFormat==='json'?(problem.tag==='链表'&&problem.id!==146?linked:problem.tag==='二叉树'?tree:''):'';
  return 'import sys\n'+support+'\ndef main():\n    raw = sys.stdin.read()\n    tokens = iter(raw.split())\n\n'+(solution?'    '+problem.py.replaceAll('\n','\n    '):'    # '+problem.input.replaceAll('\n','\n    # ')+'\n'+(problem.outputFormat==='json'?'    data = json.loads(raw)\n':'')+'    # TODO: 完成算法，使用 print 输出答案\n    pass')+'\n\n'+(structures?'# 输入输出结构工具，可直接使用\n'+structures+'\n':'')+'if __name__ == "__main__":\n    main()\n';
 }
 return '// stdin：完整标准输入；print(...values)：输出一行\nconst tokens = stdin.trim().split(/\\s+/).filter(Boolean);\nlet cursor = 0;\nconst next = () => Number(tokens[cursor++]);\n\n'+(solution?problem.js:'// '+problem.input.replaceAll('\n','\n// ')+'\n'+(problem.outputFormat==='json'?'const data = JSON.parse(stdin);\n':'')+'// TODO: 完成算法并使用 print 输出答案')+'\n';
}
