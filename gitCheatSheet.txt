create a clean git repo in this directory:
 $ git init
clone a local/remote git repo (adds the repo referred by branch as a remote named "origin"):
 $ git clone <path>

show current branch and changed/new files:
 $ git status

show previous commits of the current branch:
 $ git log

add changes / new files to the index (single files, "." for the whole dir including subdirs):
 $ git add <path>

commit all changes in the index (to the current branch, asks for commit message):
 $ git commit

commit all changes (even not in the index, but doesn't add new files):
 $ git commit -a

revert all changes made, switch to the last commit (see also other parameters and git checkout):
 $ git reset --hard

create new branch off the current one:
 $ git branch <name of branch to create>

switch current branch:
 $ git checkout <branch to switch to>

delete branch (when all commits in that branch are also in other branches)
 $ git branch -d <branch>

force delete branch (even when commits will be completely deleted by that):
 $ git branch -D <branch>

merge commits of other branch into the current one:
 $ git merge <branch>

add remote repository:
 $ git remote add <name> <path>

pull from remote branch to current branch (merges, remote branch name can be omitted if it has the same name as the local one):
 $ git pull <remote> [branch]

push to remote branch (syntax like git pull, creates a remote branch if non-existant):
 $ git push <remote> [branch]

delete remote branch:
 $ git push :<branch>
