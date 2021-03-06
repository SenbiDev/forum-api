/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const ThreadCommentsTableHelper = {
  async addThreadComments({ id = 'thread_comments-123', threadId = 'thread-123', commentId = 'comment-123' }) {
    const query = {
      text: 'INSERT INTO thread_comments VALUES($1, $2, $3)',
      values: [id, threadId, commentId],
    };

    await pool.query(query);
  },

  async findThreadComments(threadCommentId) {
    const query = {
      text: 'SELECT * FROM thread_comments WHERE id = $1',
      values: [threadCommentId],
    };

    const result = await pool.query(query);

    return result.rows;
  },
  async cleanTable() {
    await pool.query('DELETE FROM thread_comments WHERE 1=1');
  },
};

module.exports = ThreadCommentsTableHelper;
