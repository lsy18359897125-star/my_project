# 拾码 · Python ACM 算法练习

参考深色、金黄的学习工作台风格制作的个人刷题网页。默认使用 **Python 3.12**：编写完整程序，通过 `sys.stdin` 读取标准输入，通过 `print` 输出结果。

## 启动

安装 Python 3.10 或更新版本，在项目目录运行：

```powershell
python serve.py
```

浏览器打开 **http://127.0.0.1:4173**。端口被占用时使用 `python serve.py --port 4174`。

也可以使用 Node.js 22 或更新版本：`node scripts/serve.mjs`。项目无 npm 依赖，不需要安装依赖。不要直接双击 index.html，ES 模块需要 HTTP 服务。

## 功能

- 完整 LeetCode Hot 100，按官方题单的 17 个主题组织；另保留二分查找 #704 作为补充题。支持切换 Hot 100、全部题目与补充题。
- 100 道题均有独立编写的 ACM 改编题面、输入输出约定、Python 参考解法、解题提示、复杂度说明和至少 3 个验证用例。
- Python 标准输入输出模板、参考题解、样例输入和自定义输入。
- 使用 Wandbox CPython 3.12.7 在线执行 Python，展示真实输出、错误与运行耗时。JavaScript 是可选的本地 Worker 运行模式。
- 验证全部内置用例后记录练习进度。按空白分隔比较输出，值和顺序必须一致。
- 自动保存代码草稿、个人笔记、收藏、签到、学习日历与每日目标。
- 四档间隔复习：忘记了（10 分钟）、有点模糊（1 天）、记住了（至少 3 天并随之前间隔延长）、很熟练（至少 7 天）。
- 数据备份导入与导出、自定义题目 JSON 导入。模板可在「偏好与数据」中下载。自定义题号 ≥10000。
- 桌面分栏与手机单栏布局；键盘 Tab 缩进、Ctrl/⌘ + Enter 运行。

## GitHub Pages 部署

目标仓库：`https://github.com/lsy18359897125-star/my_project`。

应用为静态网页，不需要购买后端服务器；Python 代码由公共在线沙箱执行。`.github/workflows/pages.yml` 会在推送到 `main` 后执行检查、打包并部署。

1. 将这个目录的文件放到目标仓库根目录。如果仓库已有项目，先合并文件，保留现有内容；不要直接覆盖已有工作流或 README。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 推送到 `main`，或在 Actions 页面手动运行 **Test and deploy ACM Garden**。
4. 工作流成功后，查看 `github-pages` environment 返回的网站地址。预计路径为 `https://lsy18359897125-star.github.io/my_project/`，以实际部署结果为准。

官方说明：[使用工作流部署 GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

若这是一个空仓库，可在项目目录执行：

```powershell
git init -b main
git add .
git commit -m "Build Python ACM practice app"
git remote add origin https://github.com/lsy18359897125-star/my_project.git
git push -u origin main
```

这组命令仅适用于空仓库。已有仓库应先 clone 后合并应用文件。

## 校验与构建

```powershell
node --test tests/*.test.mjs
node scripts/build.mjs
```

检查需要 Python；可用 `PYTHON_BIN` 指定解释器。构建输出在 `dist/`。静态资源使用相对路径，适配 GitHub Pages 项目子路径。

## 运行与数据说明

Python 执行需要联网，会把当前代码与标准输入发送到 [Wandbox](https://wandbox.org/)，请求不保存分享链接（`save: false`）。公共服务可能限流、不可用或网络不通，应用会显示失败原因，支持在设置中更改为兼容 Wandbox 协议且支持跨域的服务。请求 30 秒超时；显示耗时包含网络与排队时间，不是算法性能基准。

JavaScript 在独立 Worker 中执行，3 秒超时，输出上限 200 KB。Python 的沙箱资源限制由远程服务提供；本应用不会在用户电脑上执行提交的 Python 代码。

进度存储在浏览器 localStorage，不跨设备同步。清理浏览器数据会清除进度，建议定期导出备份。静态网页与本地预览的网址不同，各自的浏览器进度相互独立。

这是个人练习工具：不会登录 LeetCode、抓取付费题库或向官方提交。内置用例通过不代表官方 AC，也不覆盖全部可能输入。题目页面提供官方原题链接。Hot 100 元数据于 2026-10-10 核对自 [官方学习计划](https://leetcode.cn/studyplan/top-100-liked/)，核对清单保存在 `src/hot100-manifest.json`。题面、ACM 约定与 Python 解法独立编写，不复制官方题面与题解。

## 复杂结构的 ACM 输入

新增题目使用一行 JSON 作为标准输入，输出一行 JSON。Python 模板已导入 `json`；复杂结构题还提供链表与树的构造、序列化工具。JSON 格式仍是标准输入输出，不需要提交 `class Solution`。JSON 判题忽略排版空格，并比较实际数值和结构；数组的顺序仍须遵循题目约定。

- 二叉树用层序数组，`null` 表示空子节点；按队列为非空节点分配孩子，输出省略末尾 `null`。
- 普通链表用节点值数组；环形链表用 `values` 和 `pos`；随机链表用 `[值, random下标]` 对；相交链表用两段独立前缀和一段共享尾部。
- LRU、最小栈、Trie 与数据流中位数使用操作数组，修改类操作返回 `null`。
- 存在多个合法答案的题目给出确定输出规则：例如三数之和、分组与回溯结果按字典序排列，最长回文串选择最早起点，转换 BST 使用偏左中点。

原先 11 道 Hot 100 题保留空白分隔的 ACM 输入，以兼容已有草稿和学习进度。每题按自己的输入说明运行。
