# LinkedIn: what-is-mcp

## Post 1: native text

If you've noticed "connectors" showing up in every AI tool this year, most of them run on MCP, the Model Context Protocol.

MCP is a shared standard for connecting AI applications to other software. Before it, hooking an assistant up to your CRM or database meant an integration built for that one assistant. Connecting a second AI tool meant building it again.

With MCP, the system that holds the data runs an MCP server, and any AI tool that supports MCP can use it. Claude, ChatGPT, Visual Studio Code and Cursor are among the tools that do.

Anthropic created it, and in December 2025 donated it to the Agentic AI Foundation under the Linux Foundation. For a business deciding whether to build on it, that matters: supporting MCP doesn't tie you to one AI vendor.

What it means in practice:

• If you sell software, customers will expect to use your product from inside their AI assistant. An MCP server is how you offer that, and it's only as good as the API underneath.
• If you want AI connected to internal systems, one MCP server makes them available to whichever AI tool you use, and you can switch tools later without rebuilding.

The security questions are the ordinary ones, asked more carefully. Expose read access first and add write actions one at a time. Install local servers only from sources you trust. And remember that content arriving through a tool can carry hidden instructions.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/what-is-mcp.pdf)

Document title: MCP explained in five slides

What the Model Context Protocol is, who controls it, and what it means if you want AI connected to your own systems. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/what-is-mcp?utm_source=linkedin&utm_medium=social&utm_campaign=what-is-mcp
