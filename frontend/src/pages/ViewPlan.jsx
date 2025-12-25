import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewPlan.css"; // CSS below

const ViewPlan = () => {
  const { id } = useParams();           // e.g. /plans/plan-123 → id = "plan-123"
  const navigate = useNavigate();

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      setLoading(true);
      setError(null);

      try {
        // TODO: Replace with real API call when backend is ready
        // const response = await fetch(`/api/plans/${id}`);
        // const data = await response.json();

        // Simulate API delay + mock data for now
        await new Promise((resolve) => setTimeout(resolve, 600));

        // Mock full plan data (same structure you collect in CreatePlan)
        const mockPlans = {
          "plan-1": {
            title: "IELTS Speaking Mastery",
            description:
              "A complete 8-week program designed to help you achieve Band 7+ in IELTS Speaking. Includes daily practice, feedback tips, and real exam simulations.",
            imageUrl: null, // replace with real URL when you upload images
            categories: ["Language", "Exam", "English"],
            stages: [
              {
                title: "Week 1-2: Fluency & Coherence",
                description: "Build confidence and natural speaking flow.",
                tasks: [
                  {
                    title: "Daily Topic Practice",
                    description: "Speak on 3 Part 1 topics every day.",
                    duration: "14",
                    subtasks: [
                      "Record yourself",
                      "Note new vocabulary",
                      "Self-evaluate fluency",
                    ],
                  },
                  {
                    title: "Long Turn Practice",
                    description: "Practice Part 2 cue cards.",
                    duration: "14",
                    subtasks: ["Time yourself (2 min)", "Use linking words"],
                  },
                ],
              },
              {
                title: "Week 3-4: Lexical Resource",
                description: "Expand vocabulary and use idiomatic language.",
                tasks: [
                  {
                    title: "Themed Vocabulary Lists",
                    description: "Learn 20 new words/phrases per theme.",
                    duration: "14",
                    subtasks: [
                      "Environment",
                      "Technology",
                      "Education",
                      "Health",
                    ],
                  },
                ],
              },
              // Add more stages as needed...
            ],
          },
          // Add more mock plans if you want different IDs
        };

        const foundPlan = mockPlans[id] || null;

        if (!foundPlan) {
          setError("Plan not found");
        } else {
          setPlan(foundPlan);
        }
      } catch (err) {
        setError("Failed to load plan");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

  if (loading) {
    return (
      <div className="viewplan-loading">
        <div className="spinner"></div>
        <p>Loading plan...</p>
      </div>
    );
  }

  if (error || !plan) {
    return (
      <div className="viewplan-error">
        <h2>{error || "Plan not found"}</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const {
    title,
    description,
    imageUrl,
    categories = [],
    stages = [],
  } = plan;

  return (
    <div className="viewplan-container">
      {/* Back button */}
      <button className="viewplan-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Title */}
      <h1 className="viewplan-title">{title}</h1>

      <div className="viewplan-main">
        {/* Left sidebar: Image + Info */}
        <div className="viewplan-sidebar">
          <div className="viewplan-image">
            {imageUrl ? (
              <img src={imageUrl} alt={title} />
            ) : (
              <div className="placeholder-image">
                <div className="landscape-icon"></div>
              </div>
            )}
          </div>

          <div className="viewplan-info">
            <div className="info-section">
              <strong>Description</strong>
              <p>{description}</p>
            </div>

            {categories.length > 0 && (
              <div className="info-section">
                <strong>Tags</strong>
                <div className="category-tags">
                  {categories.map((cat, i) => (
                    <span key={i} className="category-tag">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Stages */}
        <div className="viewplan-stages">
          {stages.map((stage, stageIdx) => (
            <div key={stageIdx} className="viewplan-stage">
              <h3 className="stage-title">
                Stage {stageIdx + 1}: {stage.title || "Untitled Stage"}
              </h3>
              {stage.description && (
                <p className="stage-description">{stage.description}</p>
              )}

              <div className="stage-tasks">
                {stage.tasks.map((task, taskIdx) => (
                  <div key={taskIdx} className="viewplan-task">
                    <h4 className="task-title">
                      Task {taskIdx + 1}: {task.title || "Untitled Task"}
                    </h4>
                    {task.description && (
                      <p className="task-description">{task.description}</p>
                    )}
                    {task.duration && (
                      <p className="task-duration">
                        Duration: <strong>{task.duration} Days</strong>
                      </p>
                    )}

                    {task.subtasks && task.subtasks.length > 0 && (
                      <div className="subtasks">
                        <strong>Subtasks:</strong>
                        <ul>
                          {task.subtasks.map((sub, subIdx) => (
                            <li key={subIdx}>{sub}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {stages.length === 0 && (
            <p className="no-stages">No stages defined yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPlan;