<template>
  <div class="dashboard-page">
    <div class="container">
      <h1 class="dashboard-page__heading">
        Dashboard
      </h1>
      <el-tabs v-model="activeName">
        <el-tab-pane label="All items (Website items)" name="all">
          <el-table
            :data="allQuestions"
            style="width: 100%"
            border
            v-loading="loaded"
          >
            <el-table-column label="Name">
              <template slot-scope="scope">
                <span class="el-icon-notebook-1" />
                <span style="margin-left: 10px">
                  {{ scope.row.choiceText }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Answer">
              <template slot-scope="scope">
                <span :class="scope.row.answerText ? 'el-icon-check' : 'el-icon-close'" />
                <span style="margin-left: 10px">
                  {{ scope.row.answerText ?  'Yes' : 'No' }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Subcategories">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  {{ scope.row.childrens.length }}
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="Questions" name="questions">
          <el-table
            :data="newQuestions"
            style="width: 100%"
            border
            v-loading="loaded"
          >
            <el-table-column label="Title">
              <template slot-scope="scope">
                <span class="el-icon-notebook-1" />
                <span style="margin-left: 10px">
                  {{ scope.row.title }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Email">
              <template slot-scope="scope">
                <!-- <span :class="scope.row.answerText ? 'el-icon-check' : 'el-icon-close'" /> -->
                <span style="margin-left: 10px">
                  {{ scope.row.email }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="is answered">
              <template slot-scope="scope">
                <span :class="scope.row.isAnswered ? 'el-icon-check' : 'el-icon-close'" />
                <span style="margin-left: 10px">
                  {{ scope.row.isAnswered ? 'Yes' : 'No' }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Operations" align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="goToItem(scope.row)"
                  v-if="scope.row.isAnswered"
                >
                  Edit Answer
                </el-button>
                <el-button
                  size="mini"
                  @click="goToItem(scope.row)"
                  v-else
                >
                  Answer question
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="Unanswered questions" name="unanswered">
          <el-table
            :data="unAnsweredQuestions"
            style="width: 100%"
            border
            v-loading="loaded"
          >
            <el-table-column label="Title">
              <template slot-scope="scope">
                <span class="el-icon-notebook-1" />
                <span style="margin-left: 10px">
                  {{ scope.row.title }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Email">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  {{ scope.row.email }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="is answered">
              <template slot-scope="scope">
                <span :class="scope.row.isAnswered ? 'el-icon-check' : 'el-icon-close'" />
                <span style="margin-left: 10px">
                  {{ scope.row.isAnswered ? 'Yes' : 'No' }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Operations" align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="goToItem(scope.row)"
                >
                  Answer question
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';

export default {
  name: 'DashboardPage',
  data: () => ({
    activeName: 'all',
    questions: [],
    newQuestions: [],
    search: '',
    loaded: true,
  }),
  methods: {
    goToItem(item) {
      this.$router.push(`answer-question/${item._id}`);
    },
  },
  computed: {
    allQuestions() {
      return this.questions;
    },
    unAnsweredQuestions() {
      return this.newQuestions.filter(item => !item.isAnswered);
    },
  },
  async created() {
    try {
      const questions = await question.fetchAllQuestions();
      const newQuestions = await question.fetchAllNewQuestions();

      this.loaded = false;
      this.questions = questions.data.items;
      this.newQuestions = newQuestions.data.data;
    } catch (err) {
      console.log(err);
      this.loaded = false;
    }
  },
};
</script>

<style>

</style>
