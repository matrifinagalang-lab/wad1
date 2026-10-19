<!-- PRACTICAL ACTIVITY -->
 <!-- student.php -->

<?php
$studentName = "";
$score = "";
$grade = "";
$remarks = "";

if (isset($_POST["submit"])) {
    $studentName = $_POST["studentName"];
    $score = $_POST["score"];

    if ($score < 0 || $score > 100) {
        $status = "Invalid Score";
        $grade = "Please enter 0-100";
    } else {
        if ($score >= 90) {
            $remarks = "Excellent";
        } elseif ($score >= 85) {
            $remarks = "Very Good";
        } elseif ($score >= 80) {
            $remarks = "Good";
        } elseif ($score >= 75) {
            $remarks = "Passed";
        } else {
            $remarks = "Failed";
        }

        if ($score >= 75) {
            $grade = "Passed";
        } else {
            $grade = "Failed";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Grade Calculator</title>
</head>
<body>

<h2>Student Grade Calculator</h2>

<form method="post">
    Student Name:
    <input type="text" name="studentName" required>
    <br><br>

    Score:
    <input type="number" name="score" min="0" max="100"
           step="any" required>
    <br><br>

    <button type="submit" name="submit">Calculate Grade</button>
</form>

<?php if (isset($_POST["submit"])) { ?>
    <h3>Student Results</h3>
    <p>Name: <?php echo htmlspecialchars($studentName); ?></p>
    <p>Score: <?php echo htmlspecialchars((string)$score); ?></p>
    <p>Grade: <?php echo htmlspecialchars($grade); ?></p>
    <p>Remarks: <?php echo htmlspecialchars($remarks); ?></p>
<?php } ?>

</body>
</html>