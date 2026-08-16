"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "../../components/navbar";

const url = "/resume-images/Resume May 2026.pdf";

export default function Resume() {
    const canvasRef = useRef(null);

    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const pageIsRendering = useRef(false);
    const pageNumIsPending = useRef(null);

    const scale = 1.5;

    useEffect(() => {
        let cancelled = false;

        async function loadPDF() {
            const pdfjsLib = await import("pdfjs-dist");

            pdfjsLib.GlobalWorkerOptions.workerSrc =
                "/resume-images/pdf.worker.mjs";

            const canvas = canvasRef.current;

            if (!canvas || cancelled) {
                return;
            }

            const ctx = canvas.getContext("2d");

            pdfjsLib
                .getDocument({ url })
                .promise
                .then((pdf) => {
                    if (cancelled) {
                        pdf.destroy();
                        return;
                    }

                    console.log("PDF loaded:", pdf);

                    setPdfDoc(pdf);
                    renderPage(pdf, 1, ctx);
                })
                .catch((error) => {
                    if (!cancelled) {
                        console.error("Failed to load PDF:", error);
                    }
                });
        }

        loadPDF();

        return () => {
            cancelled = true;
        };
    }, []);

    const renderPage = (pdf, num, ctx) => {
        pageIsRendering.current = true;

        pdf.getPage(num).then((page) => {
            const viewport = page.getViewport({
                scale: scale,
            });

            const canvas = canvasRef.current;

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderCtx = {
                canvasContext: ctx,
                viewport: viewport,
            };

        page.render(renderCtx).promise
            .then(() => {
                pageIsRendering.current = false;

                if (pageNumIsPending.current !== null) {
                    const pendingPage = pageNumIsPending.current;

                    pageNumIsPending.current = null;

                    renderPage(pdf, pendingPage, ctx);
                }
            })
            .catch((error) => {
                console.error("PDF render failed:", error);
                pageIsRendering.current = false;
            });
        });
    };

    const queueRenderPage = (num) => {
        if (pageIsRendering.current) {
            pageNumIsPending.current = num;
        } else if (pdfDoc) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            renderPage(pdfDoc, num, ctx);
        }
    };

    const showPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }

        const newPage = pageNum - 1;

        setPageNum(newPage);
        queueRenderPage(newPage);
    };

    const showNextPage = () => {
        if (!pdfDoc || pageNum >= pdfDoc.numPages) {
            return;
        }

        const newPage = pageNum + 1;

        setPageNum(newPage);
        queueRenderPage(newPage);
    };

    return (
        <div>
            <NavBar />

            <main className="resume">
                <p className="text">
                    Here is my resume. I will make updates to it when needed.
                    <br />
                    *download here*
                </p>

                <div className="top-bar">
                    <button
                        className="btn"
                        id="prev-page"
                        onClick={showPrevPage}
                    >
                        &#9754; Prev Page
                    </button>

                    <span className="page-info">
                        Page <span id="page-num">{pageNum}</span> of{" "}
                        <span id="page-count">
                            {pdfDoc ? pdfDoc.numPages : "..."}
                        </span>
                    </span>

                    <button
                        className="btn"
                        id="next-page"
                        onClick={showNextPage}
                    >
                        Next Page &#9755;
                    </button>

                </div>

                <canvas
                    id="pdf-render"
                    ref={canvasRef}
                />
            </main>
        </div>
    );
}