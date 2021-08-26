#!/usr/bin/env bash

# Use this one-liner to produce a JSON literal from the Git log:

repository=$(git remote -v | head -n1 | perl -lwne 'm{\b([^/:]+/[^/]+).git\s} and print $1')
git log \
    --date=iso8601-strict \
    --pretty=format:"{%n  \"commit\": \"%H\",%n  \"author\": \"%aN <%aE>\",%n  \"date\": \"%ad\",%n  \"timestamp\": %at,%n  \"message\": \"%f\",%n  \"repo\": \"$repository\"%n}," \
    "$@" | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/' | \
    perl -pe 's{\\}{\\\\}g'
