import React from 'react'
import './Git.css' // Import the CSS file

const Git = () => {
  return (
    <div className="git-container">
      <h1>Git Commands</h1>
      <ul>
        <li>
          <strong>git init:</strong> Initializes a new Git repository in the
          current directory.
          <br />
          <code>git init</code>
        </li>
        <li>
          <strong>git clone:</strong> Copies an existing repository to your
          local system.
          <br />
          <code>git clone &lt;repository_url&gt;</code>
        </li>
        <li>
          <strong>git status:</strong> Shows the current status of your working
          directory.
          <br />
          <code>git status</code>
        </li>
        <li>
          <strong>git add:</strong> Adds files to the staging area.
          <br />
          <code>git add &lt;filename&gt;</code> or <code>git add .</code>
        </li>
        <li>
          <strong>git commit:</strong> Saves changes in the repository with a
          message.
          <br />
          <code>git commit -m "Your message"</code>
        </li>
        <li>
          <strong>git log:</strong> Displays the commit history.
          <br />
          <code>git log</code>
        </li>
        <li>
          <strong>git branch:</strong> Lists, creates, or deletes branches.
          <br />
          <code>git branch</code>, <code>git branch &lt;branch_name&gt;</code>,{' '}
          <code>git branch -d &lt;branch_name&gt;</code>
        </li>
        <li>
          <strong>git checkout:</strong> Switches between branches or commits.
          <br />
          <code>git checkout &lt;branch_name&gt;</code> or{' '}
          <code>git checkout &lt;commit_hash&gt;</code>
        </li>
        <li>
          <strong>git merge:</strong> Combines changes from one branch into
          another.
          <br />
          <code>git merge &lt;branch_name&gt;</code>
        </li>
        <li>
          <strong>git pull:</strong> Fetches and integrates changes from a
          remote repository.
          <br />
          <code>git pull origin main</code>
        </li>
        <li>
          <strong>git push:</strong> Uploads your changes to a remote
          repository.
          <br />
          <code>git push origin main</code>
        </li>
        <li>
          <strong>git remote:</strong> Manages remote repository connections.
          <br />
          <code>git remote add origin &lt;repository_url&gt;</code>
        </li>
        <li>
          <strong>git diff:</strong> Shows the differences between changes.
          <br />
          <code>git diff</code> or <code>git diff --staged</code>
        </li>
        <li>
          <strong>git reset:</strong> Undoes changes or resets to a previous
          commit.
          <br />
          <code>git reset &lt;file&gt;</code> or{' '}
          <code>git reset --hard &lt;commit_hash&gt;</code>
        </li>
        <li>
          <strong>git stash:</strong> Temporarily saves changes that are not
          ready to commit.
          <br />
          <code>git stash</code> or <code>git stash apply</code>
        </li>
        <li>
          <strong>git fetch:</strong> Retrieves updates from a remote repository
          without merging them.
          <br />
          <code>git fetch origin</code>
        </li>
        <li>
          <strong>git rebase:</strong> Reapplies commits on top of another base
          tip.
          <br />
          <code>git rebase &lt;branch_name&gt;</code>
        </li>
      </ul>
    </div>
  )
}

export default Git
